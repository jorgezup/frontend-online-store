import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartIcon from './CartIcon';

class Search extends Component {
  render() {
    const { inputSearch, inputChange, handlerButton, cartSize } = this.props;
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
        <CartIcon cartSize={ cartSize } />
      </div>
    );
  }
}

Search.propTypes = {
  inputSearch: PropTypes.string.isRequired,
  inputChange: PropTypes.func.isRequired,
  handlerButton: PropTypes.func.isRequired,
  cartSize: PropTypes.number.isRequired,
};

export default Search;
