import React, { Component } from 'react';
import { getCategories } from '../services/api';

class CategoryList extends Component {
  state = {
    categories: [],
  }

  componentDidMount() {
    this.fetchApi();
  }

  fetchApi = async () => {
    const categories = await getCategories();
    this.setState({
      categories,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <ul>
          {categories
          && categories.map(({ id, name }) => (
            <li key={ id }>
              <button
                data-testid="category"
                type="button"
              >

                {name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CategoryList;
