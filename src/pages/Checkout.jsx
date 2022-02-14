import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Checkout extends Component {
  totalItemsAndTotalPrice = (listOfProductsInCart) => listOfProductsInCart
    .reduce((acc, product) => {
      acc.totalItems += 1;
      acc.totalPrice += product.amount * product.price;
      return acc;
    },
    {
      totalItems: 0,
      totalPrice: 0,
    })

  render() {
    const { productList } = this.props;
    const { totalItems, totalPrice } = this.totalItemsAndTotalPrice(productList);
    return (
      <>
        <h2>Finalize sua compra</h2>

        <section>
          {
            productList.map((product) => (
              <div key={ product.id }>
                <p>{product.title}</p>
                <p>{`Preço Unitário: R$ ${(product.price).toFixed(2)}`}</p>
                <p>{`Quantidade: ${product.amount}`}</p>
                <p>{`Valor Total: ${(product.price * product.amount).toFixed(2)}`}</p>
              </div>
            ))
          }
          {
            productList.length > 0 && (
              <>
                <p>{`Quantidade de items diferentes: ${totalItems}`}</p>
                <p>{`Valor total da compra: R$ ${totalPrice}`}</p>
              </>
            )
          }
        </section>

        <section>
          <form>
            <input
              type="text"
              placeholder="Nome Completo"
              data-testid="checkout-fullname"
            />
            <input type="email" placeholder="Email" data-testid="checkout-email" />
            <input type="string" placeholder="CPF" data-testid="checkout-cpf" />
            <input type="string" placegolder="Telefone" data-testid="checkout-phone" />
            <input type="string" placeholder="CEP" data-testid="checkout-cep" />
            <input type="text" placeholder="Endereço" data-testid="checkout-address" />
          </form>
        </section>
      </>
    );
  }
}

Checkout.propTypes = {
  productList: PropTypes.arrayOf(Object).isRequired,
};

export default Checkout;
