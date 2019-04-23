 import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';

export default function App() {
  const [cartItems, setCartItems] = useState([])
  return (
    <div className="App">
      <h3>Hooks</h3>
      <p>Items in your cart: {cartItems.toString()}</p>
      <button
        onClick = {() => {
          setCartItems([...cartItems, 'apple'])
        }}
      >
      Add to Cart
      </button>
    </div>
  );
}
