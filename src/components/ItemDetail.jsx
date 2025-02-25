import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount.jsx';

function ItemDetail({ item }) {
    const { addItem } = useContext(CartContext);
    const [added, setAdded] = useState(false);

    const handleAdd = (quantity) => {
        addItem(item, quantity);
        setAdded(true);
    };

    return (
        <div className="item-detail">
            <img src={item.imagen} alt={item.nombre} className="item-detail-image" />
            <h2>{item.nombre}</h2>
            <p>Categoría: {item.categoria}</p>
            <p>Precio: ${item.precio}</p>
            <p>Stock disponible: {item.stock}</p>

            {/* Se muestra el selector si no se agregó; sino un mensaje */}
            {!added ? (
                <ItemCount stock={item.stock} onAdd={handleAdd} />
            ) : (
                <p>Producto agregado al carrito</p>
            )}
        </div>
    );
}

export default ItemDetail;