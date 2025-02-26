import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, removeItem, clearCart, totalPrice } = useContext(CartContext);

    if (cart.length === 0) {
        return (
            <div>
                <h2>El carrito está vacío</h2>
                <Link to="/">Volver al inicio</Link>
            </div>
        );
    }

    return (
        <div>
            <h2>Carrito</h2>
            {cart.map((item) => (
                <div key={item.id} className="cart-item">
                    <h3>{item.nombre}</h3>
                    <p>Precio: ${item.precio}</p>
                    <p>Cantidad: {item.quantity}</p>
                    <button onClick={() => removeItem(item.id)}>Eliminar</button>
                </div>
            ))}
            <h3>Total: ${totalPrice()}</h3>
            <button onClick={clearCart}>Vaciar Carrito</button>
            <Link to="/checkout">Finalizar Compra</Link>
        </div>
    );
};

export default Cart;