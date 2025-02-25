import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer.jsx';
import Cart from './components/Cart.jsx';
import Checkout from './components/Checkout.jsx';
import './App.css';

function App() {
return (



{/* Catálogo completo /}
<Route
path="/"
element={

}
/>
{/ Por categoría /}
<Route path="/category/:categoryId" element={} />
{/ Detalle de producto /}
<Route path="/item/:itemId" element={} />
{/ Carrito /}
<Route path="/cart" element={} />
{/ Checkout */}
<Route path="/checkout" element={} />


);
}

export default App;
