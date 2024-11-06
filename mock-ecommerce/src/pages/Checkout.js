// src/pages/Checkout.js
import React, { useEffect, useState } from 'react';
import { fetchCart } from '../services/api';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  padding: 20px;
  background-color: #f3f3f3;
  justify-content: center;
`;

const CartSummary = styled.div`
  flex: 2;
  background-color: white;
  padding: 20px;
  margin-right: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const PaymentSection = styled.div`
  flex: 1;
  background-color: white;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #eaeaea;
`;

const ItemDetails = styled.div`
  display: flex;
  align-items: center;
`;

const ItemImage = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 10px;
  object-fit: cover;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const ItemInfo = styled.div`
  flex-grow: 1;
`;

const ItemPrice = styled.div`
  font-weight: bold;
`;

const Total = styled.div`
  font-size: 1.2em;
  font-weight: bold;
  padding-top: 20px;
  border-top: 1px solid #eaeaea;
  text-align: right;
`;

const ProceedButton = styled.button`
  background-color: #ffd814;
  color: #111;
  font-weight: bold;
  padding: 10px 0;
  border: 1px solid #f0c14b;
  border-radius: 4px;
  width: 100%;
  margin-top: 20px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f7ca00;
  }
`;

function Checkout() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCart()
      .then((res) => setCartItems(res.data))
      .catch((error) => console.error("Error fetching cart items:", error));
  }, []);

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  const handlePayment = () => {
    // Simulate payment outcome (50% success, 50% failure)
    const isSuccess = Math.random() > 0.5;
    navigate(isSuccess ? '/payment-success' : '/payment-failure');
  };

  return (
    <Container>
      <CartSummary>
        <h2>Cart Summary</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <CartItem key={item.id}>
              <ItemDetails>
                <ItemImage src={item.image} alt={item.name} />
                <ItemInfo>
                  <p>{item.name}</p>
                </ItemInfo>
              </ItemDetails>
              <ItemPrice>${item.price.toFixed(2)}</ItemPrice>
            </CartItem>
          ))
        )}
        <Total>Total: ${totalPrice.toFixed(2)}</Total>
      </CartSummary>

      <PaymentSection>
        <h2>Payment Information</h2>
        <p>Choose your payment method and billing information.</p>
        <ProceedButton onClick={handlePayment}>Proceed to Payment</ProceedButton>
      </PaymentSection>
    </Container>
  );
}

export default Checkout;
