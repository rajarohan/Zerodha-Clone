import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3002/api', // Make sure this is correct.
});

export const register = (userData) => API.post('/auth/register', userData);
export const login = (userData) => API.post('/auth/login', userData);
export const getDashboard = (token) =>
  API.get('/dashboard', { headers: { Authorization: `Bearer ${token}` } });