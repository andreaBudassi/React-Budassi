import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products.js';
import ItemDetail from './ItemDetail.jsx';

function ItemDetailContainer() {
  const [item, setItem] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    // Simula una llamada asíncrona a una API
    const getItem = new Promise((resolve) => {
      setTimeout(() => {
        const foundItem = products.find(
          (product) => product.id === parseInt(itemId)
        );
        resolve(foundItem);
      }, 1000);
    });

    getItem.then((data) => setItem(data));
  }, [itemId]);

  return (
    <div className="container-style">
      {item ? <ItemDetail item={item} /> : <p>Cargando...</p>}
    </div>
  );
}

export default ItemDetailContainer;