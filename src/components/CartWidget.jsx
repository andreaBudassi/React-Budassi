import React from 'react';

function CartWidget() {
  return (
    <div className="cart-widget">
      <img
        src="https://cdn-icons-png.flaticon.com/512/107/107831.png"
        alt="Carrito"
        className="cart-icon"
      />
      <span className="cart-count">3</span>
    </div>
  );
}

export default CartWidget;