import { useState, useEffect } from "react";
import {
    getProducts,
    addProduct,
    deleteProduct
} from "../services/api";

import Navbar from "../components/Navbar";
import "./Admin.css";

function Admin() {

    const [products, setProducts] = useState([]);

    const [formData, setFormData] = useState({
        name: "",
        price: "",
        category: "",
        description: "",
        image: ""
    });

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {

        try {

            const response =
                await getProducts();

            setProducts(response.data);

        } catch (error) {

            console.log(error);
        }
    };

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]:
                e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await addProduct(formData);

            alert("Product Added");

            setFormData({
                name: "",
                price: "",
                category: "",
                description: "",
                image: ""
            });

            loadProducts();

        } catch (error) {

            console.log(error);
        }
    };

    const handleDelete = async (id) => {

        try {

            await deleteProduct(id);

            loadProducts();

        } catch (error) {

            console.log(error);
        }
    };

    return (
        <>
            <Navbar />

            <div className="admin-page">

                <h1>
                    Admin Dashboard
                </h1>

                <form
                    className="admin-form"
                    onSubmit={handleSubmit}
                >

                    <input
                        type="text"
                        name="name"
                        placeholder="Product Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="number"
                        name="price"
                        placeholder="Price"
                        value={formData.price}
                        onChange={handleChange}
                        required
                    />

                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        required
                    >

                        <option value="">
                            Select Category
                        </option>

                        <option value="Cement">
                            Cement
                        </option>

                        <option value="Brick">
                            Brick
                        </option>

                        <option value="TMT Bar">
                            TMT Bar
                        </option>

                        <option value="AAC Block">
                            AAC Block
                        </option>

                        <option value="Wall Putty">
                            Wall Putty
                        </option>

                        <option value="POP">
                            POP
                        </option>

                        <option value="RMC">
                            RMC
                        </option>

                    </select>

                    <textarea
                        name="description"
                        placeholder="Description"
                        value={formData.description}
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        name="image"
                        placeholder="Image URL"
                        value={formData.image}
                        onChange={handleChange}
                    />

                    <button type="submit">
                        Add Product
                    </button>

                </form>

                <div className="admin-products">

                    {products.map(product => (

                        <div
                            className="admin-card"
                            key={product.id}
                        >

                            <img
                                src={product.image}
                                alt={product.name}
                            />

                            <h3>
                                {product.name}
                            </h3>

                            <p>
                                ₹{product.price}
                            </p>

                            <p>
                                {product.category}
                            </p>

                            <button
                                onClick={() =>
                                    handleDelete(
                                        product.id
                                    )
                                }
                            >
                                Delete
                            </button>

                        </div>

                    ))}

                </div>

            </div>
        </>
    );
}

export default Admin;