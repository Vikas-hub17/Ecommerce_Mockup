import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ccc;
  padding: 1rem;
  margin: 1rem;
  width: 200px;
  text-align: center;
`;

function ProductCard({ product }) {
  return (
    <Card>
      <img src={product.image} alt={product.name} width="150" />
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <Link to={`/product/${product.id}`}>View Details</Link>
    </Card>
  );
}

export default ProductCard;
