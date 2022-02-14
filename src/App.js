import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { getSpecificItem } from './services/api';
import Home from './pages/Home';
import Cart from './pages/Cart';
import DetailsProducts from './pages/DetailsProducts';

class App extends React.Component {
  state = {
    cartList: [],
  }

  handleButtonAddCart = async ({ target: { id } }) => {
    const product = await getSpecificItem(id);
    const { cartList } = this.state;

    const productExists = cartList.find((productItem) => productItem.id === product.id);

    if (productExists) {
      this.addProductToList(product);
      return;
    }

    const newProduct = {
      ...product,
      amount: 1,
    };

    this.setState({
      cartList: [...cartList, newProduct],
    });
  }

  addProductToList = (product) => {
    const { cartList } = this.state;
    const updatedCart = [...cartList];
    const productAdd = updatedCart.find((productItem) => productItem.id === product.id);
    productAdd.amount += 1;

    this.setState({
      cartList: [...updatedCart],
    });
  }

  removeProductFromCart = (product) => {
    const { cartList } = this.state;
    const updatedCart = [...cartList];
    const productRemoved = updatedCart.findIndex((
      productItem,
    ) => productItem.id === product.id);

    if (productRemoved >= 0) {
      product.amount -= 1;
      if (product.amount <= 0) {
        updatedCart.splice(productRemoved, 1);
      }
      this.setState({ cartList: [...updatedCart] });
    }
  }

  /* Removido essa função e utilizado a função  handleButtonAddCart */
  // addCar = async ({ target: { id } }) => {
  //   const { cartList } = this.state;
  //   const result = await fetch(`https://api.mercadolibre.com/items/${id}`);
  //   const data = await result.json();
  //   this.setState({ cartList: [...cartList, data] });
  //   console.log(id);
  // }

  render() {
    const { cartList } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={ () => <Home handleButtonAddCart={ this.handleButtonAddCart } /> }
          />
          <Route
            exact
            path="/cart"
            render={ () => (<Cart
              productList={ cartList }
              handleAddProduct={ this.addProductToList }
              handleRemoveProduct={ this.removeProductFromCart }
            />) }
          />
          <Route
            path="/details/:id"
            render={ (props) => (<DetailsProducts
              addCar={ this.handleButtonAddCart }
              { ...props }
            />) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
