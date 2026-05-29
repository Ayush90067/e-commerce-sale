import axios from "axios";

const API = axios.create({

    baseURL:"http://localhost:8080"
});

// GET PRODUCTS

export const getProducts = () =>
    API.get("/products");

// ADD PRODUCT

export const addProduct = (product) =>
    API.post("/products", product);

// DELETE PRODUCT

export const deleteProduct = (id) =>
    API.delete(`/products/${id}`);

// UPDATE PRODUCT

export const updateProduct = (
    id,
    product
) => API.put(`/products/${id}`, product);

export default API;