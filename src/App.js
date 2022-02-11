import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { getSpecificItem } from './services/api';
import Home from './pages/Home';
import Cart from './pages/Cart';

class App extends React.Component {
  state = {
    cartList: [],
  }

  handleButtonAddCart = async ({ target: { id } }) => {
    const { cartList } = this.state;
    const result = await getSpecificItem(id);
    this.setState({ cartList: [...cartList, result] });
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
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
