import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  text-align: center;
  padding: 1rem;
  background-color: #333;
  color: white;

  a {
    color: #ffc107;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Footer = () => (
  <FooterContainer>
    <p>&copy; {new Date().getFullYear()} Todo Lindo</p>
    <Link to="/help">¿Necesitas ayuda? Contáctanos aquí</Link>
  </FooterContainer>
);

export default Footer;
