import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  padding: 1rem;
  background-color: #333;
  color: white;
  display: flex;
  justify-content: space-between;
`;

function Navbar() {
  return (
    <Nav>
      <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
      <Link to="/products" style={{ color: 'white', textDecoration: 'none' }}>Products</Link>
      <Link to="/checkout" style={{ color: 'white', textDecoration: 'none' }}>Cart</Link>
    </Nav>
  );
}

export default Navbar;
