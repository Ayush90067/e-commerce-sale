import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import { CartContext } from "../context/CartContext";

import "./ProductDetails.css";

function ProductDetails() {

    const { id } = useParams();

    const [product, setProduct] = useState(null);

    const [quantity, setQuantity] = useState(1);

    const { addToCart } = useContext(CartContext);

    useEffect(() => {

        axios
            .get(`http://localhost:8080/products/${id}`)
            .then((response) => {

                setProduct(response.data);

            })
            .catch((error) => {

                console.log(error);

            });

    }, [id]);

    if (!product) {
        return <h2>Loading Product...</h2>;
    }

    const handleAddToCart = () => {

        addToCart({
            ...product,
            quantity
        });

        alert("Product Added To Cart");
    };

    return (
        <>
            <Navbar />

            <div className="product-details">

                <div className="product-image">

                    <img
                        src={product.image}
                        alt={product.name}
                    />

                </div>

                <div className="product-content">

                    <h1>{product.name}</h1>

                    <h2>
                        ₹{product.price}
                    </h2>

                    <p>
                        {product.description}
                    </p>

                    <div className="quantity-box">

                        <label>
                            Quantity:
                        </label>

                        <input
                            type="number"
                            min="1"
                            value={quantity}
                            onChange={(e) =>
                                setQuantity(
                                    Number(e.target.value)
                                )
                            }
                        />

                    </div>

                    <div className="action-buttons">

                        <button
                            className="cart-btn"
                            onClick={handleAddToCart}
                        >
                            Add To Cart
                        </button>

                        <a
                            href={`https://wa.me/919006791742?text=Hello, I want to order ${product.name}`}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <button className="buy-btn">
                                Request Quote
                            </button>
                        </a>

                    </div>

                </div>

            </div>
        </>
    );
}

export default ProductDetails;