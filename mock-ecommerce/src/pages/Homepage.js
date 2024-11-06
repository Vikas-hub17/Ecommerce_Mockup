// src/pages/Homepage.js
import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api';
import ProductCard from '../components/ProductCard';
import styled from 'styled-components';

// Container for the homepage
const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;  /* Center the content */
`;

// Header styling for a clean look
const Header = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

// Grid layout for product cards
const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;
`;

function Homepage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts()
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <Container>
      <Header>Featured Products</Header>
      <ProductGrid>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductGrid>
    </Container>
  );
}

export default Homepage;
