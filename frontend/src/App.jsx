import "./App.css";
import Header from "./components/header/Header.jsx";
import { Routes, Route } from "react-router-dom";
import Products from "./components/products/Products.jsx";
import SignUp from "./components/signup/SignUp.jsx";
import Cart from "./components/cart/Cart.jsx";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);

  function handleAddProduct(product) {
    const productExist = cartItems.find((item) => {
      return item.id === product.id;
    });

    if (productExist) {
      setCartItems(
        cartItems.map((item) => {
          return item.id === product.id
            ? { ...productExist, quantity: productExist.quantity + 1 }
            : item;
        })
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  }

  function handleRemoveProduct(product) {
    const productExist = cartItems.find((item) => {
      return item.id === product.id;
    });

    if (productExist.quantity === 1) {
      setCartItems(
        cartItems.filter((item) => {
          return item.id !== product.id;
        })
      );
    } else {
      setCartItems(
        cartItems.map((item) => {
          return item.id === product.id
            ? { ...productExist, quantity: productExist.quantity - 1 }
            : item;
        })
      );
    }
  }

  function handleCartClearence() {
    setCartItems([]);
  }

  return (
    <div>
      <Header cartItems={cartItems} />
      <Routes>
        <Route
          exact
          path="/"
          element={<Products handleAddProduct={handleAddProduct} />}
        />
        <Route exact path="/signup" element={<SignUp />} />
        <Route
          exact
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
              handleCartClearence={handleCartClearence}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
