import React from 'react';
import { Link } from 'react-router-dom';

function CartWidget() {
  return (
    <div className="cart-widget">
      <Link to="/cart">
        <img
          src="https://cdn-icons-png.flaticon.com/512/107/107831.png"
          alt="Carrito"
          className="cart-icon"
        />
        <span className="cart-count">3</span>
      </Link>
    </div>
  );
}

export default CartWidget;