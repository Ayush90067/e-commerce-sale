import { useEffect, useState } from "react";

import {

    getProducts,

    addProduct,

    deleteProduct,

    updateProduct

} from "../services/api";

import "./Admin.css";

function Admin() {

    // PRODUCTS

    const [products, setProducts] = useState([]);

    // EDIT MODE

    const [editId, setEditId] = useState(null);

    // FORM DATA

    const [formData, setFormData] = useState({

        name:"",
        price:"",
        category:"",
        description:"",
        image:""
    });

    // FETCH PRODUCTS

    useEffect(() => {

        fetchProducts();

    }, []);

    const fetchProducts = async () => {

        try {

            const response = await getProducts();

            setProducts(response.data);

        } catch (error) {

            console.log(error);
        }
    };

    // HANDLE INPUT

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value
        });
    };

    // ADD OR UPDATE PRODUCT

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            // UPDATE PRODUCT

            if (editId) {

                await updateProduct(
                    editId,
                    formData
                );

                alert("Product Updated");

            } else {

                // ADD PRODUCT

                await addProduct(formData);

                alert("Product Added");
            }

            // REFRESH PRODUCTS

            fetchProducts();

            // RESET FORM

            setFormData({

                name:"",
                price:"",
                category:"",
                description:"",
                image:""
            });

            // RESET EDIT MODE

            setEditId(null);

        } catch (error) {

            console.log(error);
        }
    };

    // DELETE PRODUCT

    const handleDelete = async (id) => {

        try {

            await deleteProduct(id);

            fetchProducts();

        } catch (error) {

            console.log(error);
        }
    };

    // EDIT PRODUCT

    const handleEdit = (product) => {

        setEditId(product.id);

        setFormData({

            name:product.name,

            price:product.price,

            category:product.category,

            description:product.description,

            image:product.image
        });

        // SCROLL TO TOP

        window.scrollTo({

            top:0,

            behavior:"smooth"
        });
    };

    return (

        <div className="admin-page">

            <h1>Admin Dashboard</h1>

            {/* FORM */}

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

                <input
                    type="text"
                    name="category"
                    placeholder="Category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                />

                <textarea
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="image"
                    placeholder="Image URL"
                    value={formData.image}
                    onChange={handleChange}
                    required
                />

                <button type="submit">

                    {
                        editId
                        ? "Update Product"
                        : "Add Product"
                    }

                </button>

            </form>

            {/* PRODUCTS */}

            <div className="admin-products">

                {
                    products.map((product) => (

                        <div
                            className="admin-card"
                            key={product.id}
                        >

                            <img
                                src={product.image}
                                alt={product.name}
                            />

                            <h3>{product.name}</h3>

                            <p>₹ {product.price}</p>

                            <div className="admin-buttons">

                                {/* EDIT BUTTON */}

                                <button
                                    className="edit-btn"

                                    onClick={() =>
                                        handleEdit(product)
                                    }
                                >
                                    Edit
                                </button>

                                {/* DELETE BUTTON */}

                                <button
                                    className="delete-btn"

                                    onClick={() =>
                                        handleDelete(product.id)
                                    }
                                >
                                    Delete
                                </button>

                            </div>

                        </div>
                    ))
                }

            </div>

        </div>
    )
}

export default Admin;