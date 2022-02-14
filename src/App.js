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
    const { cartList } = this.state;
    const result = await getSpecificItem(id);
    this.setState({ cartList: [...cartList, result] });
  }

  addCar = async ({ target: { id } }) => {
    const { cartList } = this.state;
    const result = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const data = await result.json();
    this.setState({ cartList: [...cartList, data] });
    console.log(id);
  }

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
          <Route exact path="/cart" render={ () => <Cart productList={ cartList } /> } />
          <Route
            path="/details/:id"
            render={ (props) => <DetailsProducts addCar={ this.addCar } { ...props } /> }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
