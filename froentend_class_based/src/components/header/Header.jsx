import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends Component {
  render() {
    const { cartItems } = this.props;

    return (
      <header className="header">
        <div>
          <h1>
            <Link to="/" className="logo">
              Fruit Kart
            </Link>
          </h1>
        </div>

        <div className="header-links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>

          <ul>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </ul>

          <ul>
            <li>
              <Link to="/cart" className="cart">
                <i className="fas fa-shopping-cart" />
                <span className="cart-length">
                  {cartItems.length}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
