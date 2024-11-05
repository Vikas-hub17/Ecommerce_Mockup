import React, { useEffect, useState } from 'react';
import { fetchCart } from '../services/api';

function Checkout() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCart().then((res) => setCartItems(res.data));
  }, []);

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  const handlePayment = () => {
    const isSuccess = Math.random() > 0.5;
    window.location.href = `/payment-status?status=${isSuccess ? 'success' : 'failure'}`;
  };

  return (
    <div>
      <h1>Checkout</h1>
      {cartItems.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>${item.price}</p>
        </div>
      ))}
      <h2>Total: ${totalPrice.toFixed(2)}</h2>
      <button onClick={handlePayment}>Proceed to Payment</button>
    </div>
  );
}

export default Checkout;
