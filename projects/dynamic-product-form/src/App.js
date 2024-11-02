import React, { useState } from 'react';
import ProductForm from './components/ProductForm';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);

  const handleProductSubmit = (productData) => {
    setProducts([...products, productData]);
  };

  return (
    <div className="App">
      <h1>Dynamic Product Creation Form</h1>
      <ProductForm onSubmit={handleProductSubmit} />
    </div>
  );
};

export default App;
