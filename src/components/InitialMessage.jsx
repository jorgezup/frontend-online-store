import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cart from '../icons/cart.svg';

class Search extends Component {
  render() {
    return (
      <div>
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

export default Search;
