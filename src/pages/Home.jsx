import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery, getSpecificCategory } from '../services/api';
import CategoryList from '../components/CategoryList';
import Search from '../components/Search';
import Products from '../components/Products';

class Home extends Component {
  state = {
    inputSearch: '',
    list: [],
  }

  inputChange = ({ target: { value } }) => {
    this.setState({ inputSearch: value });
  }

  fetchAPI = async (query) => {
    const { results } = await getProductsFromCategoryAndQuery(query);
    this.setState({ list: results });
  }

  handlerButton = () => {
    const { inputSearch } = this.state;
    this.fetchAPI(inputSearch);
  }

  handleButtonCategory = async ({ target: { id } }) => {
    const { results } = await getSpecificCategory(id);
    this.setState({ list: results });
  }

  render() {
    const { inputSearch, list } = this.state;
    const { handleButtonAddCart, cartSize } = this.props;
    return (
      <main>
        <Search
          cartSize={ cartSize }
          inputSearch={ inputSearch }
          inputChange={ this.inputChange }
          handlerButton={ this.handlerButton }
        />
        <CategoryList
          handleButton={ this.handleButtonCategory }
        />
        <Products handleButton={ handleButtonAddCart } list={ list } />
      </main>
    );
  }
}

Home.propTypes = {
  handleButtonAddCart: PropTypes.func.isRequired,
  cartSize: PropTypes.number.isRequired,
};

export default Home;
