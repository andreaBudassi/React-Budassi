import React from 'react';
import CartWidget from './CartWidget.jsx';

function NavBar() {
  return (
    <nav className="navbar">
      <h1 className="logo">E-COMMERCE</h1>
      <ul className="nav-links">
        <li><a href="#" className="nav-link">Categoría 1</a></li>
        <li><a href="#" className="nav-link">Categoría 2</a></li>
        <li><a href="#" className="nav-link">Categoría 3</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
}

export default NavBar;