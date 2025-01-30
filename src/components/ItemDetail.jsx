import React from 'react';

function ItemDetail({ item }) {
  return (
    <div className="item-detail">
      <img src={`/${item.imagen}`} alt={item.nombre} className="item-detail-image" />
      <h2>{item.nombre}</h2>
      <p>Categoría: {item.categoria}</p>
      <p>Precio: ${item.precio}</p>
      <p>Stock disponible: {item.stock}</p>
      {/* Proximamente agregar al carrito */}
    </div>
  );
}

export default ItemDetail;