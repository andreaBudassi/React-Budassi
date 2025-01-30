import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products.js';
import ItemList from './ItemList.jsx';

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    // Simula una llamada asíncrona a una API
    const getItems = new Promise((resolve) => {
      setTimeout(() => {
        if (categoryId) {
          const filteredProducts = products.filter(
            (product) => product.categoria === categoryId
          );
          resolve(filteredProducts);
        } else {
          resolve(products);
        }
      }, 1000);
    });

    getItems.then((data) => setItems(data));
  }, [categoryId]);

  return (
    <div className="container-style">
      {greeting && <h2>{greeting}</h2>}
      <ItemList items={items} />
    </div>
  );
}

export default ItemListContainer;