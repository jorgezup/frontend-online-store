import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import cart from '../icons/cart.svg';

class DetailsProducts extends React.Component {
    state = {
      data: [],
    }

    async componentDidMount() {
      const { match: { params: { id } } } = this.props;
      const results = await fetch(`https://api.mercadolibre.com/items/${id}`);
      const data = await results.json();
      this.setState({ data });
    }

    render() {
      const { match: { params: { id } } } = this.props;
      const { addCar } = this.props;
      const { data } = this.state;
      const { attributes } = data;
      return (
        <section data-testid="product-detail-name">
          <div>
            <Link
              data-testid="shopping-cart-button"
              to="/cart"
            >
              <img src={ cart } alt="Cart Icon" />
            </Link>
          </div>
          <div>
            <h2>{ data.title }</h2>
            <h3>{ data.price }</h3>
            <img src={ data.thumbnail } alt={ data.title } />
          </div>
          <button
            id={ id }
            type="button"
            data-testid="product-detail-add-to-cart"
            onClick={ addCar }
          >
            Adicionar ao Carrinho
          </button>
          <div>
            <h2>Especificações</h2>
            { attributes && attributes.map(({ name, value_name: valueName }) => (
              <li key={ name }>
                { name }
                :
                { valueName }
              </li>)) }
          </div>
        </section>
      );
    }
}

DetailsProducts.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
  addCar: PropTypes.func.isRequired,
};

export default DetailsProducts;
