import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class Products extends React.Component {
  render() {
    const { list, handleButton } = this.props;
    return (
      <div>
        {list.map(({ price, title, thumbnail, id }) => (
          <Card
            handleButton={ handleButton }
            title={ title }
            price={ price }
            url={ thumbnail }
            key={ id }
            id={ id }
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
