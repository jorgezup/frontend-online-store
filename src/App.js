import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import DetailsProducts from './pages/DetailsProducts';
import Checkout from './pages/Checkout';

class App extends React.Component {
  state = {
    cartList: [],
    productReview: [],
    email: '',
    rate: '',
    review: '',
  }

  handleButtonAddCart = async (product) => {
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

  /* Funções para o Details Product */

    handleChange = ({ target }) => {
      const value = (target.type === 'checkbox') ? target.checked : target.value;
      this.setState({
        [target.name]: value,
      });
    }

    handleSubmitReview = (product) => {
      const { productReview, email, rate, review } = this.state;
      console.log(productReview, email, rate, review, product);

      const newReview = {
        email,
        rate,
        review,
        productId: product.id,
      };

      console.log(newReview);

      this.setState({
        productReview: [...productReview, newReview],
      });

      this.resetForm();

      return <Redirect to="/" />;
    }

    resetForm = () => {
      this.setState({
        email: '',
        rate: '',
        review: '',
      });
    }

    render() {
      const { cartList, email, rate, review, productReview } = this.state;
      console.log(productReview);
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
                handleButtonAddCart={ this.handleButtonAddCart }
                email={ email }
                rate={ rate }
                review={ review }
                handleSubmitReview={ this.handleSubmitReview }
                handleChange={ this.handleChange }
                productReview={ productReview }
                { ...props }
              />) }
            />
            <Route
              path="/checkout"
              render={ () => (<Checkout
                productList={ cartList }
                totalItemsAndTotalPrice={ this.totalItemsAndTotalPrice }
              />) }
            />
          </Switch>
        </BrowserRouter>
      );
    }
}

export default App;
