// src/components/ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 16px;
  margin: 20px;
  width: 200px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 15px;
`;

const ProductName = styled.h2`
  font-size: 16px;
  color: #007185;
`;

const ProductPrice = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #B12704;
  margin: 10px 0;
`;

function ProductCard({ product }) {
  return (
    <Card>
      <ProductImage src={product.image} alt={product.name} />
      <ProductName>{product.name}</ProductName>
      <ProductPrice>${product.price}</ProductPrice>
      <Link to={`/product/${product.id}`}>
        <button>Add to Cart</button>
      </Link>
    </Card>
  );
}

export default ProductCard;
