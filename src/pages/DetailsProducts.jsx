import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import cart from '../icons/cart.svg';
import { getSpecificItem } from '../services/api';

class DetailsProducts extends React.Component {
    state = {
      product: [],
    }

    async componentDidMount() {
      const { match: { params: { id } } } = this.props;
      const product = await getSpecificItem(id);
      this.setState({ product });
    }

    render() {
      const { handleButtonAddCart } = this.props;
      const { product } = this.state;
      const { id, title, price, thumbnail, attributes } = product;
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
            <h2>{ title }</h2>
            <h3>{ price }</h3>
            <img src={ thumbnail } alt={ title } />
          </div>
          <button
            id={ id }
            type="button"
            data-testid="product-detail-add-to-cart"
            onClick={ () => handleButtonAddCart(product) }
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
  handleButtonAddCart: PropTypes.func.isRequired,
};

export default DetailsProducts;
