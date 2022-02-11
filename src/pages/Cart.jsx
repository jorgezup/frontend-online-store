import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Cart extends Component {
  render() {
    const { productList } = this.props;
    return (
      <div>
        {
          productList.length ? productList.map(({ price, title, thumbnail, id }) => (
            <div key={ id }>
              <h2 data-testid="shopping-cart-product-name">{ title }</h2>
              <img src={ thumbnail } alt={ title } />
              <p>{ price }</p>
              <p data-testid="shopping-cart-product-quantity">1</p>
            </div>
          )) : <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        }
      </div>
    );
  }
}

Cart.propTypes = {
  productList: PropTypes.arrayOf(PropTypes.object),
};

Cart.defaultProps = {
  productList: [],
};

export default Cart;
