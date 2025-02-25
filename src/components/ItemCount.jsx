import React, { useState } from 'react';

function ItemCount({ stock, initial, onAdd }) {
const [count, setCount] = useState(initial);

const increment = () => {
if (count < stock) {
setCount(count + 1);
}
};

const decrement = () => {
if (count > 1) {
setCount(count - 1);
}
};

return (

- {count} + <button onClick={() => onAdd(count)}>Agregar al carrito
); }
export default ItemCount;
