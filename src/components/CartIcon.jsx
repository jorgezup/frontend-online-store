import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import cart from '../icons/cart.svg';

class CartIcon extends Component {
  render() {
    const { cartSize } = this.props;
    return (
      <Link
        data-testid="shopping-cart-button"
        to="/cart"
      >
        <img src={ cart } alt="Cart Icon" />
        <p data-testid="shopping-cart-size">{ cartSize }</p>
      </Link>
    );
  }
}

CartIcon.propTypes = {
  cartSize: PropTypes.number.isRequired,
};

export default CartIcon;
