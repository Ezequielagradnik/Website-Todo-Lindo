import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #ff7f50;
  color: white;

  a {
    color: white;
    margin: 0 0.5rem;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease;

    &:hover {
      color: #ffd700; /* Color dorado al hacer hover */
    }
  }

  h1 {
    margin: 0;
    font-size: 1.5rem;
    display: flex;
    align-items: center;

    img {
      height: 40px; /* Ajusta el tamaño del logo */
      margin-right: 0.5rem;
    }
  }
`;

const Header = ({ user }) => (
  <NavBar>
    <h1>
      <img src="/logo.png" alt="Logo Todo Lindo" /> {/* Ajusta la ruta de tu logo */}
      Todo Lindo
    </h1>
    <div>
      <Link to="/">Home</Link> | 
      <Link to="/cart">Carrito</Link> | 
      <Link to="/help">Ayuda</Link>
      {user && user.role === 'admin' && (
        <>
          {' | '}
          <Link to="/admin">Panel de Administración</Link>
        </>
      )}
    </div>
  </NavBar>
);

export default Header;
