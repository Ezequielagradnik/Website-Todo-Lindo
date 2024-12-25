import React from 'react';
import { Link } from 'react-router-dom';
import '../Header.css';

const Header = ({ user }) => {
  return (
    <nav className="header-container">
      <div className="logo-section">
        <img src="/catalog_images/logo_todo_lindo.png" alt="Logo Todo Lindo" className="header-logo" />
      </div>
      <div className="nav-links">
        <div className="dropdown">
          <span>Explorar por categoría</span>
          <ul>
            <li><Link to="/category/bazar">Bazar</Link></li>
            <li><Link to="/category/jugueteria">Juguetería</Link></li>
            <li><Link to="/category/libreria">Librería</Link></li>
            <li><Link to="/category/accesorios">Accesorios</Link></li>
          </ul>
        </div>
        <Link to="/offers" className="offers-button">OFERTAS EXCLUSIVAS</Link>
        <div className="search-bar">
          <input type="text" placeholder="Buscar..." />
        </div>
      </div>
      <div className="icons-section">
        <Link to="/cart">
          <img src="/catalog_images/cart_icon.png" alt="Carrito" className="header-icon" />
        </Link>
        <Link to="/notifications">
          <img src="/catalog_images/notification_icon.png" alt="Notificaciones" className="header-icon" />
        </Link>
        <Link to="/register">
          <img src="/catalog_images/user_icon.png" alt="Usuario" className="header-icon" />
        </Link>
      </div>
    </nav>
  );
};

export default Header;
