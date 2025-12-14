import "./App.css";
import React, { Component } from "react";
import Header from "./components/header/Header.jsx";
import { Routes, Route } from "react-router-dom";
import Products from "./components/products/Products.jsx";
import SignUp from "./components/signup/SignUp.jsx";
import Cart from "./components/cart/Cart.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
    };
  }

  handleAddProduct = (product) => {
    const { cartItems } = this.state;

    const productExist = cartItems.find(
      (item) => item.id === product.id
    );

    if (productExist) {
      this.setState({
        cartItems: cartItems.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity + 1 }
            : item
        ),
      });
    } else {
      this.setState({
        cartItems: [...cartItems, { ...product, quantity: 1 }],
      });
    }
  };

  handleRemoveProduct = (product) => {
    const { cartItems } = this.state;

    const productExist = cartItems.find(
      (item) => item.id === product.id
    );

    if (productExist.quantity === 1) {
      this.setState({
        cartItems: cartItems.filter(
          (item) => item.id !== product.id
        ),
      });
    } else {
      this.setState({
        cartItems: cartItems.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity - 1 }
            : item
        ),
      });
    }
  };

  handleCartClearence = () => {
    this.setState({ cartItems: [] });
  };

  render() {
    const { cartItems } = this.state;

    return (
      <div>
        <Header cartItems={cartItems} />
        <Routes>
          <Route
            path="/"
            element={
              <Products handleAddProduct={this.handleAddProduct} />
            }
          />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                handleAddProduct={this.handleAddProduct}
                handleRemoveProduct={this.handleRemoveProduct}
                handleCartClearence={this.handleCartClearence}
              />
            }
          />
        </Routes>
      </div>
    );
  }
}

export default App;
