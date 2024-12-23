import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const Header = ({ user }) => (
  <nav>
    <h1>Todolindo</h1>
    <div className="links">
      <Link to="/">Home</Link>
      <Link to="/offers">Ofertas</Link>
      {user && user.role === 'admin' && <Link to="/admin">Admin</Link>}
      {!user && (
        <>
          <Link to="/login">Iniciar Sesión</Link>
          <Link to="/register">Registrarse</Link>
        </>
      )}
      {user && <button onClick={() => alert('Cerrando sesión')}>Cerrar Sesión</button>}
    </div>
  </nav>
);

export default Header;
