import { useContext } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import { CartContext } from "../context/CartContext";

import "./Cart.css";

function Cart() {

    const {
        cartItems,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart
    } = useContext(CartContext);

    // Total Price

    const totalPrice = cartItems.reduce(

        (total, item) =>

            total + (item.price * item.quantity),

        0
    );

    return (

        <>
            <Navbar />

            <div className="cart-page">

                <h1>Your Cart</h1>

                {cartItems.length === 0 ? (

                    <div className="empty-cart">

                        <h2>Cart Is Empty</h2>

                        <Link to="/products">

                            <button className="shop-btn">
                                Continue Shopping
                            </button>

                        </Link>

                    </div>

                ) : (

                    <>
                        {cartItems.map((item) => (

                            <div
                                className="cart-item"
                                key={item.id}
                            >

                                <img
                                    src={item.image}
                                    alt={item.name}
                                />

                                <div className="cart-details">

                                    <h3>
                                        {item.name}
                                    </h3>

                                    <p className="price">
                                        ₹ {item.price}
                                    </p>

                                    <div className="quantity-box">

                                        <button
                                            onClick={() =>
                                                decreaseQuantity(
                                                    item.id
                                                )
                                            }
                                        >
                                            -
                                        </button>

                                        <span>
                                            {item.quantity}
                                        </span>

                                        <button
                                            onClick={() =>
                                                increaseQuantity(
                                                    item.id
                                                )
                                            }
                                        >
                                            +
                                        </button>

                                    </div>

                                    <p className="subtotal">

                                        Subtotal :

                                        ₹ {
                                            item.price *
                                            item.quantity
                                        }

                                    </p>

                                    <button
                                        className="remove-btn"
                                        onClick={() =>
                                            removeFromCart(
                                                item.id
                                            )
                                        }
                                    >
                                        Remove
                                    </button>

                                </div>

                            </div>

                        ))}

                        <div className="cart-summary">

                            <h2>
                                Total : ₹ {totalPrice}
                            </h2>

                            <Link to="/checkout">

                                <button
                                    className="checkout-btn"
                                >
                                    Proceed To Checkout
                                </button>

                            </Link>

                        </div>

                    </>
                )}

            </div>

        </>
    );
}

export default Cart;