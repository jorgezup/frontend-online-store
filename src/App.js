import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import DetailsProducts from './pages/DetailsProducts';
import Checkout from './pages/Checkout';
import { addReviews } from './services/localStorage';

class App extends React.Component {
  state = {
    cartList: [],
    cartSize: 0,
    email: '',
    rate: '',
    review: '',
  }

  componentDidMount() {
    const teste = JSON.parse(localStorage.getItem('amount'));
    if (!teste) {
      localStorage.setItem('amount', JSON.stringify(0));
    }
    const cartSize = JSON.parse(localStorage.getItem('amount'));
    this.setState({ cartSize });
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
    const prevSize = JSON.parse(localStorage.getItem('amount'));
    localStorage.setItem('amount', JSON.stringify(prevSize + 1));
    const size = JSON.parse(localStorage.getItem('amount'));
    this.setState({
      cartList: [...cartList, newProduct],
      cartSize: size,
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

    handleChange = ({ target }) => {
      const value = (target.type === 'checkbox') ? target.checked : target.value;
      this.setState({
        [target.name]: value,
      });
    }

    handleSubmitReview = (product) => {
      const { email, rate, review } = this.state;

      const newReview = {
        email,
        rate,
        review,
        productId: product.id,
      };

      addReviews(newReview);

      this.resetForm();
    }

    resetForm = () => {
      this.setState({
        email: '',
        rate: '',
        review: '',
      });
    }

    render() {
      const { cartList, cartSize, email, rate, review } = this.state;
      return (
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={ () => (<Home
                cartSize={ cartSize }
                handleButtonAddCart={ this.handleButtonAddCart }
              />) }
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
                cartSize={ cartSize }
                handleButtonAddCart={ this.handleButtonAddCart }
                email={ email }
                rate={ rate }
                review={ review }
                handleSubmitReview={ this.handleSubmitReview }
                handleChange={ this.handleChange }
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
