import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  text-align: center;
  padding: 1rem;
  background-color: #333;
  color: white;
`;

const Footer = () => (
  <FooterContainer>
    <p>&copy; {new Date().getFullYear()} Todo Lindo</p>
  </FooterContainer>
);

export default Footer;
