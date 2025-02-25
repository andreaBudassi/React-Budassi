import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

function Cart() {
    const { cart, totalPrice, removeItem, clearCart } = useContext(CartContext);

    if (cart.length === 0) {
        return (
            <div className="empty-cart">
                <h2>El carrito está vacío</h2>
                <Link to="/">Volver a la tienda</Link>
            </div>
        );
    }

    return (
        <div className="cart">
            <h2>Carrito de Compras</h2>
            {cart.map((item) => (
                <div key={item.id} className="cart-item">
                    <img src={item.imagen} alt={item.nombre} className="cart-item-image" />
                    <h3>{item.nombre}</h3>
                    <p>Precio: ${item.precio}</p>
                    <p>Cantidad: {item.quantity}</p>
                    <button onClick={() => removeItem(item.id)}>Eliminar</button>
                </div>
            ))}
            <h3>Total: ${totalPrice}</h3>
            <button onClick={clearCart}>Vaciar carrito</button>
            <Link to="/checkout">
                <button>Realizar Compra</button>
            </Link>
        </div>
    );
}

export default Cart;