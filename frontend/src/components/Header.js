import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: #ff7f50;
  color: white;
`;

const Header = () => (
  <NavBar>
    <h1>Todo Lindo</h1>
    <div>
      <Link to="/">Home</Link> | <Link to="/cart">Carrito</Link> |{' '}
      <Link to="/help">Ayuda</Link>
    </div>
  </NavBar>
);

export default Header;
