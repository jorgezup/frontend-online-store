import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    const { handleButton } = this.props;
    return (
      <div>
        <ul>
          {categories
          && categories.map(({ id, name }) => (
            <li key={ id }>
              <button
                data-testid="category"
                type="button"
                id={ id }
                onClick={ handleButton }
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

CategoryList.propTypes = {
  handleButton: PropTypes.func.isRequired,
};

export default CategoryList;
