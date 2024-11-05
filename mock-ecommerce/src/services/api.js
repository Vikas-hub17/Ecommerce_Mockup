import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const fetchProducts = () => axios.get(`${API_URL}/products`);
export const fetchProductById = (id) => axios.get(`${API_URL}/products/${id}`);
export const addToCart = (product) => axios.post(`${API_URL}/cart`, product);
export const fetchCart = () => axios.get(`${API_URL}/cart`);
