import React from 'react'
import {Link } from 'react-router-dom';
import "./Header.css"

export default function Header(props) {
  return (
    <header className = "header">
      <div>
        <h1>
          <Link to = '/' className ='logo'>
          Fruit Kart
          </Link>
        </h1>
      </div>
      <div>
        <ul>
          <li>
            <Link to ='/'>Home</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to ='/signup'>SignUp</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to ='/cart' cassName ='cart'>
            <i className='fas fa-shopping-cart'/>
            <span className='cart-length'>
              {props.cartItems.length}
            </span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
