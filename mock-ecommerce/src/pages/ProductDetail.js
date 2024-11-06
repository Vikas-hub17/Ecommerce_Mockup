// src/pages/ProductDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById, addToCart } from '../services/api';
import styled from 'styled-components';

// Main Container
const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #f7f7f7;
`;

// Product Image Styling
const ProductImage = styled.img`
  max-width: 450px;
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

// Product Details Section Styling
const DetailsSection = styled.div`
  padding: 20px;
  max-width: 600px;
  margin-left: 40px;
  flex: 1;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

// Product Name Styling
const ProductName = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin-bottom: 15px;
`;

// Product Description Styling
const ProductDescription = styled.p`
  font-size: 16px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 20px;
  text-align: justify;
  height: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

// Price Styling
const ProductPrice = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #b12704;
  margin: 20px 0;
`;

// Add to Cart Button Styling
const AddToCartButton = styled.button`
  background-color: #f0c14b;
  border: 1px solid #a88734;
  border-radius: 6px;
  padding: 12px 20px;
  font-size: 18px;
  font-weight: bold;
  color: #111;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  width: 100%;
  
  &:hover {
    background-color: #e2a301;
    transform: scale(1.05);
  }

  &:active {
    background-color: #c88e16;
  }
`;

// Ratings and Reviews Section (Optional)
const RatingsSection = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-top: 1px solid #e2e2e2;
`;

const Rating = styled.span`
  font-size: 20px;
  color: #ff9900;
`;

const ReviewCount = styled.span`
  font-size: 16px;
  color: #555;
`;

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProductById(id).then((res) => setProduct(res.data));
  }, [id]);

  const handleAddToCart = () => {
    if (product) addToCart(product);
    alert("Added to cart!");
  };

  return product ? (
    <Container>
      <ProductImage src={product.image} alt={product.name} />
      <DetailsSection>
        <ProductName>{product.name}</ProductName>
        <ProductDescription>{product.description}</ProductDescription>
        <ProductPrice>${product.price}</ProductPrice>
        <AddToCartButton onClick={handleAddToCart}>Add to Cart</AddToCartButton>
        
        {/* Ratings and Reviews Section */}
        <RatingsSection>
          <Rating>★★★★☆</Rating>
          <ReviewCount>({product.reviewsCount} Reviews)</ReviewCount>
        </RatingsSection>
      </DetailsSection>
    </Container>
  ) : (
    <p>Loading...</p>
  );
}

export default ProductDetail;
