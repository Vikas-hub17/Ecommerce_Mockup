// src/pages/PaymentFailure.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  text-align: center;
  color: #f44336;
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

const RetryButton = styled(Link)`
  background-color: #ffd814;
  color: #111;
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  text-decoration: none;
`;

function PaymentFailure() {
  return (
    <Container>
      <Message>Payment Failed</Message>
      <Details>Something went wrong. Please try again later or use a different payment method.</Details>
      <RetryButton to="/checkout">Retry Payment</RetryButton>
    </Container>
  );
}

export default PaymentFailure;
