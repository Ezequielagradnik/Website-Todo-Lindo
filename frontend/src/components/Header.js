import React from 'react';
import { Link } from 'react-router-dom';
import '../Header.css';

const Header = ({ user }) => {
  return (
    <nav className="header-container">
    <div className="logo-section">
      <Link to="/">
        <img
          src="/catalog_images/logo_todo_lindo.png"
          alt="Logo Todo Lindo"
          className="header-logo"
        />
      </Link>
      </div>
      <div className="nav-links">
        <div className="dropdown">
          <span>▼ Explorar por categoría</span>
          <ul>
            <li>
              <Link to="/category/bazar">Novedades</Link>
            </li>
            <li>
              <Link to="/category/Hogar">Acesorios para el hogar</Link>
            </li>
            <li>
              <Link to="/category/Jugueteria">Jugueteria</Link>
            </li>
            <li>
              <Link to="/category/Libreria">Libreria</Link>
            </li>
            <li>
              <Link to="/category/accesorios">Accesorios y organizacion</Link>
            </li>
            <li>
              <Link to="/category/Regalos">Regalos</Link>
            </li>
          </ul>
        </div>
        <Link to="/offers" className="offers-button">
          OFERTAS EXCLUSIVAS
        </Link>
        <div className="search-bar">
          <input type="text" placeholder="Buscar..." />
          <div className="search-icon-wrapper">
          </div>
        </div>
      </div>
      <div className="icons-section">
        <div className="header-icon-wrapper">
          <img
            src="/catalog_images/cart_icon.png"
            alt="Carrito"
            className="header-icon"
          />
        </div>
        <div className="header-icon-wrapper">
          <img
            src="/catalog_images/notification_icon.png"
            alt="Notificaciones"
            className="header-icon"
          />
        </div>
        <div className="header-icon-wrapper">
          <Link to="/register">
            <img
              src="/catalog_images/user_icon.png"
              alt="Usuario"
              className="header-icon"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
