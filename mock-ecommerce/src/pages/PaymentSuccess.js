// src/pages/PaymentSuccess.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  text-align: center;
  color: #4caf50;
`;

const Message = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;
`;

const Details = styled.p`
  font-size: 1.1em;
  margin-bottom: 30px;
  color: #555;
`;

const BackButton = styled(Link)`
  background-color: #ffd814;
  color: #111;
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  text-decoration: none;
`;

function PaymentSuccess() {
  return (
    <Container>
      <Message>Payment Successful!</Message>
      <Details>Thank you for your purchase. Your order is being processed.</Details>
      <BackButton to="/">Return to Homepage</BackButton>
    </Container>
  );
}

export default PaymentSuccess;
