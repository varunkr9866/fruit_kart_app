import './App.css';
import Header from './components/frontend/header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './components/frontend/products/Products';
import SignUp from './components/frontend/signup/SignUp';
import Cart from './components/frontend/cart/Cart';
import { useState } from 'react';


function App() {
  const [cartItems, setCartItems] = useState([]);

  function handleAddProduct(product) {
    const productExist = cartItems.find(item => {
      return item.id === product.id;
    });

    if (productExist) {
      setCartItems(cartItems.map(item => {
        return item.id === product.id ?
          { ...productExist, quantity: productExist.quantity + 1 } :
          item;
      }))
    }
    else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  }

  function handleRemoveProduct(product) {
    const productExist = cartItems.find(item => {
      return item.id === product.id;
    });

    if (productExist.quantity === 1) {
      setCartItems(cartItems.filter(item => {
        return item.id !== product.id;
      }));
    }
    else {
      setCartItems(cartItems.map(item => {
        return item.id === product.id ?
          { ...productExist, quantity: productExist.quantity - 1 } :
          item
      }))
    }
  }

  function handleCartClearence() {
    setCartItems([]);
  }


  return (
    <div>
      <Router>
        <Header cartItems={cartItems} />
        <Routes>
          <Route exact path="/" element={<Products handleAddProduct={handleAddProduct} />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/cart" element={<Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClearence={handleCartClearence} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


