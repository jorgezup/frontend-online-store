import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import cart from '../icons/cart.svg';

class Search extends Component {
  render() {
    const { inputSearch, inputChange, handlerButton } = this.props;
    return (
      <div>
        <label htmlFor="search">
          <input
            type="text"
            placeholder="O que você procura?"
            name="search"
            id="search"
            value={ inputSearch }
            onChange={ inputChange }
            data-testid="query-input"
          />
        </label>
        <button
          type="button"
          onClick={ handlerButton }
          data-testid="query-button"
        >
          Pesquisar

        </button>
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

Search.propTypes = {
  inputSearch: PropTypes.string.isRequired,
  inputChange: PropTypes.func.isRequired,
  handlerButton: PropTypes.func.isRequired,
};

export default Search;
