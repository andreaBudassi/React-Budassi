import { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        setCart((prevCart) => {
            const exists = prevCart.find((cartItem) => cartItem.id === item.id);
            return exists
                ? prevCart.map((prod) =>
                      prod.id === item.id ? { ...prod, quantity: prod.quantity + quantity } : prod
                  )
                : [...prevCart, { ...item, quantity }];
        });
    };

    const removeItem = (id) => setCart((prevCart) => prevCart.filter((item) => item.id !== id));

    const clearCart = () => setCart([]);

    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

    const totalPrice = cart.reduce((acc, item) => acc + item.quantity * item.precio, 0);

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity, totalPrice }}>
            {children}
        </CartContext.Provider>
    );
}