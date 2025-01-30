import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer.jsx';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {/* Ruta para el catálogo completo */}
        <Route path="/" element={<ItemListContainer greeting="¡Bienvenidos a mi tienda online!" />} />
        {/* Ruta para categorías */}
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        {/* Ruta para detalle de producto */}
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;