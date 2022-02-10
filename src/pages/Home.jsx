import React, { Component } from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
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

  render() {
    const { inputSearch, list } = this.state;
    return (
      <main>
        <Search
          inputSearch={ inputSearch }
          inputChange={ this.inputChange }
          handlerButton={ this.handlerButton }
        />
        <CategoryList />
        <Products list={ list } />
      </main>
    );
  }
}

export default Home;
