import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class Products extends React.Component {
  render() {
    const { list, handleButton } = this.props;
    return (
      <div>
        {list.map((product) => (
          <Card
            handleButton={ handleButton }
            key={ product.id }
            product={ product }
          />
        ))}
      </div>
    );
  }
}

Products.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleButton: PropTypes.func.isRequired,
};

export default Products;
