// src/components/ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Card container styling for compact layout
const Card = styled.div`
  background-color: white;
  border-radius: 6px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  width: 100%;
  max-width: 240px;  /* Compact card width */
  margin: 10px;
  display: flex;
  flex-direction: column;
  height: 100%;
  text-align: center;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

// Product image styling (compact size)
const ProductImage = styled.img`
  width: 100%;
  height: 180px;  /* Reduced height for compactness */
  object-fit: cover;
`;

// Product name styling (compact font size)
const ProductName = styled.h2`
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin: 10px 0;
  line-height: 1.2;
  height: 40px;  /* Consistent height */
  overflow: hidden;
  text-overflow: ellipsis;
`;

// Rating stars styling (for compact display)
const Rating = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
`;

const Star = styled.span`
  color: #ff9900;
  font-size: 14px;
`;

// Product price styling (compact version)
const ProductPrice = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #b12704;
  margin: 5px 0;
`;

// Availability text styling (compact)
const Availability = styled.p`
  font-size: 12px;
  color: #555;
  margin-bottom: 10px;
  height: 16px;
`;

// Button for adding to cart (clean design)
const AddToCartButton = styled.button`
  padding: 8px 15px;
  font-size: 14px;
  font-weight: bold;
  color: white;
  background-color: #f0c14b;
  border: 1px solid #a88734;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease;

  &:hover {
    background-color: #e2a301;
    transform: scale(1.05);
  }

  &:active {
    background-color: #c88e16;
  }
`;

// Quick View Button for a cleaner look
const QuickViewButton = styled.button`
  padding: 5px 10px;
  font-size: 12px;
  font-weight: normal;
  color: #007185;
  background-color: transparent;
  border: 1px solid #007185;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: #f0f0f0;
    color: #005f69;
  }
`;

function ProductCard({ product }) {
  return (
    <Card>
      <ProductImage src={product.image} alt={product.name} />
      <ProductName>{product.name}</ProductName>

      {/* Display product rating */}
      <Rating>
        {Array.from({ length: 5 }, (_, index) => (
          <Star key={index}>★</Star>
        ))}
      </Rating>

      <ProductPrice>${product.price}</ProductPrice>
    
      <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
        <AddToCartButton>Add to Cart</AddToCartButton>
      </Link>
    </Card>
  );
}

export default ProductCard;
