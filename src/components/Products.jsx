import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class Products extends React.Component {
  render() {
    const { list } = this.props;
    return (
      <div>
        {list.map(({ price, title, thumbnail, id }) => (
          <Card title={ title } price={ price } url={ thumbnail } key={ id } id={ id } />
        ))}
      </div>
    );
  }
}

Products.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Products;
