import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Card extends React.Component {
  render() {
    const { title, url, price, id } = this.props;
    return (
      <Link data-testid="product-detail-link" to={ `/details/${id}` } product="product">
        <div data-testid="product">
          <h3>{title}</h3>
          <img src={ url } alt={ title } />
          <p>{`R$ ${price}`}</p>
        </div>
      </Link>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default Card;
