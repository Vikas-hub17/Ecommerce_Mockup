// src/pages/PaymentResult.js
import React from 'react';
import { useLocation } from 'react-router-dom';

function PaymentResult() {
  const location = useLocation();
  const status = new URLSearchParams(location.search).get('status');

  return (
    <div>
      <h2>Payment {status === 'success' ? 'Successful' : 'Failed'}</h2>
      <p>{status === 'success' ? 'Thank you for your purchase!' : 'Something went wrong. Please try again.'}</p>
    </div>
  );
}

export default PaymentResult;
