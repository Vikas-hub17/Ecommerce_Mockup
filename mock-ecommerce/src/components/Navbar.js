// src/components/Navbar.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const NavbarContainer = styled.div`
  background-color: #131921;
  color: white;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Logo = styled(Link)`
  color: #ff9900;
  font-size: 1.5em;
  font-weight: bold;
  text-decoration: none;
  margin-right: 20px;
`;

const SearchBar = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px 0 0 4px;
  outline: none;
  font-size: 1em;
`;

const SearchButton = styled.button`
  background-color: #febd69;
  color: #131921;
  padding: 10px;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  font-size: 1em;

  &:hover {
    background-color: #f3a847;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-left: 20px;
  font-size: 0.9em;

  &:hover {
    text-decoration: underline;
  }
`;

const CartContainer = styled(Link)`
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
  margin-left: 20px;
  position: relative;

  &:hover {
    color: #ff9900;
  }
`;

const CartIcon = styled(FaShoppingCart)`
  font-size: 1.5em;
`;

const CartBadge = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #f08804;
  color: white;
  padding: 2px 6px;
  border-radius: 50%;
  font-size: 0.8em;
`;

function Navbar({ cartItemCount }) {
  return (
    <NavbarContainer>
      <Logo to="/">MyStore</Logo>
      
      <SearchBar>
        <SearchInput type="text" placeholder="Search for products..." />
        <SearchButton>Search</SearchButton>
      </SearchBar>

      <NavLinks>
        <NavLink to="#">Sign In</NavLink>
        <NavLink to="#">Orders</NavLink>
        <NavLink to="#">Wishlist</NavLink>
      </NavLinks>

      <CartContainer to="/checkout">
        <CartIcon />
        {cartItemCount > 0 && <CartBadge>{cartItemCount}</CartBadge>}
      </CartContainer>
    </NavbarContainer>
  );
}

export default Navbar;
