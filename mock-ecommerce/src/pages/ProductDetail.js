import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById, addToCart } from '../services/api';

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
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  ) : (
    <p>Loading...</p>
  );
}

export default ProductDetail;
