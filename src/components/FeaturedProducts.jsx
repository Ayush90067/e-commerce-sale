import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Navbar from "../components/Navbar";
import { CartContext } from "../context/CartContext";

import "./FeaturedProducts.css";

function FeaturedProducts() {

    const [products, setProducts] = useState([]);

    const navigate = useNavigate();

    const { addToCart } = useContext(CartContext);

    useEffect(() => {

        axios
            .get("https://e-commerce-sale-backend-production.up.railway.app/products")
            .then((response) => {

                setProducts(response.data);

            })
            .catch((error) => {

                console.log(error);

            });

    }, []);

    const handleViewDetails = (id) => {

        navigate(`/products/${id}`);

    };

    const handleAddToCart = (product) => {

    const token =
        localStorage.getItem("token");

    if (!token) {

        alert(
            "Please Login First To Add Products To Cart"
        );

        navigate("/login");

        return;
    }

    addToCart({
        ...product,
        quantity: 1
    });

    alert("Product Added To Cart");
};

    return (
        <>
            <Navbar />

            <section className="featured-products">

                <div className="container">

                    <h2 className="section-title">
                        Featured <span>Products</span>
                    </h2>

                    <p className="section-subtitle">
                        Explore our premium range of construction materials.
                    </p>

                    <div className="products-grid">

                        {products.map((product) => (

                            <div
                                className="product-card"
                                key={product.id}
                            >

                                <img
                                    src={product.image}
                                    alt={product.name}
                                />

                                <div className="product-info">

                                    <h4>
                                        {product.name}
                                    </h4>

                                    <p className="category">
                                        {product.category}
                                    </p>

                                    <p className="price">
                                        ₹{product.price}
                                    </p>

                                    <div className="product-buttons">

                                        <button
                                            className="cart-btn"
                                            onClick={() =>
                                                handleAddToCart(product)
                                            }
                                        >
                                            Add To Cart
                                        </button>
                                      <button
                                         className="details-btn"
                                          onClick={() =>
                                           navigate(`/product/${product.id}`)
                                           }
                                           >
                                            View Details
                                          </button>
                                        

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </section>
        </>
    );
}

export default FeaturedProducts;