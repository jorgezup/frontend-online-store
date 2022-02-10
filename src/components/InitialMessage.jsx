import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cart from '../icons/cart.svg';

class InitialMessage extends Component {
  render() {
    return (
      <div>
        <label htmlFor="search">
          <input
            type="text"
            placeholder="O que você procura?"
            name="search"
            id="search"
          />
        </label>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Link
          data-testid="shopping-cart-button"
          to="/cart"
        >
          <img src={ cart } alt="Cart Icon" />
        </Link>
      </div>
    );
  }
}

export default InitialMessage;
