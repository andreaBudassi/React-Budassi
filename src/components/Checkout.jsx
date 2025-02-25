import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

function Checkout() {
    const { cart, totalPrice, clearCart } = useContext(CartContext);
    const [formData, setFormData] = useState({
        name: '',
        lastname: '',
        phone: '',
        email: '',
        emailConfirm: '',
    });
    const [orderId, setOrderId] = useState(null);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.email !== formData.emailConfirm) {
            setError('Los emails no coinciden.');
            return;
        }

        setError('');

        // Simulación de orden (aquí se integraría con Firebase)
        const newOrder = {
            buyer: {
                name: formData.name,
                lastname: formData.lastname,
                phone: formData.phone,
                email: formData.email,
            },
            items: cart,
            total: totalPrice,
            date: new Date().toISOString(),
            status: 'generada',
        };

        // Simulación de generación de ID de orden
        const generatedId = 'ORDER-' + Date.now();
        setOrderId(generatedId);
        clearCart();
    };

    if (orderId) {
        return (
            <div className="order-confirmation">
                <h2>Compra Realizada</h2>
                <p>Su número de orden es: <strong>{orderId}</strong></p>
                <Link to="/">Volver a la tienda</Link>
            </div>
        );
    }

    if (cart.length === 0) {
        return (
            <div className="empty-cart">
                <h2>No hay productos en el carrito.</h2>
                <Link to="/">Volver a la tienda</Link>
            </div>
        );
    }

    return (
        <div className="checkout">
            <h2>Checkout</h2>
            <h3>Resumen de la Orden</h3>
            {cart.map((item) => (
                <div key={item.id} className="order-item">
                    <p>
                        {item.nombre} x {item.quantity} = ${item.precio * item.quantity}
                    </p>
                </div>
            ))}
            <h3>Total: ${totalPrice}</h3>

            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Nombre" value={formData.name} onChange={handleChange} required />
                <input type="text" name="lastname" placeholder="Apellido" value={formData.lastname} onChange={handleChange} required />
                <input type="tel" name="phone" placeholder="Teléfono" value={formData.phone} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Correo Electrónico" value={formData.email} onChange={handleChange} required />
                <input type="email" name="emailConfirm" placeholder="Confirmar Correo" value={formData.emailConfirm} onChange={handleChange} required />
                
                {error && <p style={{ color: 'red' }}>{error}</p>}
                
                <button type="submit" disabled={formData.email !== formData.emailConfirm}>
                    Realizar Compra
                </button>
            </form>
        </div>
    );
}

export default Checkout;
