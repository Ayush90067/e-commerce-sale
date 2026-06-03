import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080"
});

// PRODUCTS

export const getProducts = () => {
  return api.get("/products");
};

export const addProduct = (product) => {
  return api.post("/products", product);
};

export const updateProduct = (id, product) => {
  return api.put(`/products/${id}`, product);
};

export const deleteProduct = (id) => {
  return api.delete(`/products/${id}`);
};

// AUTH

export const loginUser = (credentials) => {
  return api.post("/auth/login", credentials);
};

export const registerUser = (user) => {
  return api.post("/auth/register", user);
};

export default api;