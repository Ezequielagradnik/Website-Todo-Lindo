import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css'; // Asegúrate de importar tu archivo CSS externo

const Header = ({ user }) => (
  <nav>
    <h1>
      <img src="/catalog_images/logo.png" alt="Logo Todo Lindo" height="50" />
      Todo Lindo
    </h1>
    <div className="links">
      <Link to="/">Home</Link>
      <Link to="/offers">Ofertas</Link>
      <Link to="/cart">Carrito</Link>
      <Link to="/help">Ayuda</Link>
      {user && user.role === 'admin' && <Link to="/admin">Admin</Link>}
    </div>
  </nav>
);

export default Header;
