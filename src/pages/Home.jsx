import React, { Component } from 'react';
import CategoryList from '../components/CategoryList';
import InitialMessage from '../components/InitialMessage';

class Home extends Component {
  render() {
    return (
      <main>
        <InitialMessage />
        <CategoryList />
      </main>
    );
  }
}

export default Home;
