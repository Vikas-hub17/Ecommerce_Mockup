import React from 'react';
import { useLocation } from 'react-router-dom';

function PaymentStatus() {
  const query = new URLSearchParams(useLocation().search);
  const status = query.get('status');

  return (
    <div>
      {status === 'success' ? <h1>Payment Successful!</h1> : <h1>Payment Failed!</h1>}
      <a href="/">Return to Homepage</a>
    </div>
  );
}

export default PaymentStatus;
