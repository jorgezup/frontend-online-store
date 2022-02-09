import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cart from '../icons/cart.svg';
import CategoryList from './CategoryList';

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
        <aside>
          <CategoryList />
        </aside>
      </div>
    );
  }
}

export default Search;
