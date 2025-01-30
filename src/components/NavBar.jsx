import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget.jsx';

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <h1>E-COMMERCE</h1>
      </Link>
      <ul className="nav-links">
        <li>
          <Link to="/category/celulares" className="nav-link">
            Celulares
          </Link>
        </li>
        <li>
          <Link to="/category/tv" className="nav-link">
            TV
          </Link>
        </li>
        <li>
          <Link to="/category/cámaras" className="nav-link">
            Cámaras
          </Link>
        </li>
        <li>
          <Link to="/category/audio" className="nav-link">
            Audio
          </Link>
        </li>
        <li>
          <Link to="/category/impresoras" className="nav-link">
            Impresoras
          </Link>
        </li>
        <li>
          <Link to="/category/accesorios" className="nav-link">
            Accesorios
          </Link>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
}

export default NavBar;