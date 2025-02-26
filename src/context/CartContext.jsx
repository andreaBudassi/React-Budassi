import { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    // Agregar o actualizar un ítem en el carrito
    const addItem = (item, quantity) => {
        const exists = cart.find((cartItem) => cartItem.id === item.id);
        if (exists) {
            setCart(
                cart.map((prod) =>
                    prod.id === item.id
                        ? { ...prod, quantity: prod.quantity + quantity }
                        : prod
                )
            );
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    };

    // Eliminar un producto según su id
    const removeItem = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    // Vaciar todo el carrito
    const clearCart = () => setCart([]);

    // Cantidad total de ítems en el carrito
    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

    // Total a pagar
    const totalPrice = cart.reduce(
        (acc, item) => acc + item.quantity * item.precio,
        0
    );

    const value = {
        cart,
        addItem,
        removeItem,
        clearCart,
        totalQuantity,
        totalPrice,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
