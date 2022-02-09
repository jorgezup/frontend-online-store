import React from 'react';
import './App.css';
import { getCategories, getProductsFromCategoryAndQuery } from './services/api';

function App() {
  console.log(getCategories());
  console.log(getProductsFromCategoryAndQuery('computador'));
  return (
    <div>
      <h1>teste</h1>
    </div>
  );
}

export default App;
