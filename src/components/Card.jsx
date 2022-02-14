import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Card extends React.Component {
  render() {
    const { product, handleButton } = this.props;
    const { title, thumbnail, price, id } = product;
    return (
      <div data-testid="product">
        <Link
          data-testid="product-detail-link"
          to={ `/details/${id}` }
          product="product"
        >
          <h3>{title}</h3>
          <img src={ thumbnail } alt={ title } />
          <p>{`R$ ${price}`}</p>
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => handleButton(product) }
          id={ id }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

Card.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  handleButton: PropTypes.func.isRequired,
};

export default Card;
