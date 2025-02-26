import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

const Checkout = () => {
    const { cart, totalPrice, clearCart } = useContext(CartContext);
    const [formData, setFormData] = useState({ nombre: "", email: "", emailConfirm: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.email !== formData.emailConfirm) {
            alert("Los correos no coinciden");
            return;
        }
        console.log("Compra realizada", { ...formData, cart });
        clearCart();
    };

    const isFormComplete = Object.values(formData).every((value) => value.trim() !== "");

    return (
        <div>
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="nombre" placeholder="Nombre" onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <input type="email" name="emailConfirm" placeholder="Confirmar Email" onChange={handleChange} required />
                <button type="submit" disabled={!isFormComplete || formData.email !== formData.emailConfirm}>
                    Finalizar compra
                </button>
            </form>
            <h3>Resumen de compra</h3>
            {cart.map((item) => (
                <div key={item.id} className="order-item">
                    <p>
                        {item.nombre} x {item.quantity} = ${item.precio * item.quantity}
                    </p>
                </div>
            ))}
            <p>Total: ${totalPrice()}</p>
        </div>
    );
};

export default Checkout;