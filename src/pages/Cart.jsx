import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import remove from '../icons/minus.png';
import add from '../icons/plus.png';
import del from '../icons/delete.png';

class Cart extends Component {
  render() {
    const { productList,
      handleRemoveProduct,
      handleAddProduct,
    } = this.props;
    return (
      <div>
        {
          productList.length ? productList.map((product) => (
            <div key={ product.id }>
              <h2 data-testid="shopping-cart-product-name">{ product.title }</h2>
              <img src={ product.thumbnail } alt={ product.title } />
              <p>{ product.price }</p>
              <p data-testid="shopping-cart-product-quantity">{product.amount}</p>
              <button
                type="button"
                value={ product.id }
                onClick={ () => handleRemoveProduct(product) }
                data-testid="product-decrease-quantity"
              >
                <img src={ remove } alt="Remover um item" />
              </button>
              <button
                type="button"
                value={ product.id }
                onClick={ () => handleAddProduct(product) }
                data-testid="product-increase-quantity"
              >
                <img src={ add } alt="Adicionar mais um item" />
              </button>
              <button type="button">
                <img src={ del } alt="Remover produto do carrinho" />
              </button>
            </div>
          )) : <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        }
        { productList.length > 0
          && (
            <Link to="/checkout">
              <button type="button" data-testid="checkout-products">
                Finalizar a compra
              </button>
            </Link>
          )}
      </div>
    );
  }
}

Cart.propTypes = {
  productList: PropTypes.arrayOf(PropTypes.object),
  handleAddProduct: PropTypes.func.isRequired,
  handleRemoveProduct: PropTypes.func.isRequired,
};

Cart.defaultProps = {
  productList: [],
};

export default Cart;
