import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { title, url, price, handleButton, id } = this.props;
    return (
      <div data-testid="product">
        <h3>{title}</h3>
        <img src={ url } alt={ title } />
        <p>{`R$ ${price}`}</p>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ handleButton }
          id={ id }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  handleButton: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default Card;
