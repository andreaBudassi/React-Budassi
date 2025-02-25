import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

function CartWidget() {
  const { totalQuantity } = useContext(CartContext);

  return (

Carrito{totalQuantity }
   );
}
export default CartWidget;
