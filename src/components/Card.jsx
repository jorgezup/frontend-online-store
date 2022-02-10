import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { title, url, price } = this.props;
    return (
      <div data-testid="product">
        <h3>{title}</h3>
        <img src={ url } alt={ title } />
        <p>{`R$ ${price}`}</p>
      </div>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Card;
