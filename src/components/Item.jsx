import React from 'react';
import { Link } from 'react-router-dom';

function Item({ product }) {
  return (
    <div className="item-card">
      <img src={`/${product.imagen}`} alt={product.nombre} className="item-image" />
      <h3>{product.nombre}</h3>
      <p>Precio: ${product.precio}</p>
      <Link to={`/item/${product.id}`} className="item-detail-link">
        Ver Detalle
      </Link>
    </div>
  );
}

export default Item;