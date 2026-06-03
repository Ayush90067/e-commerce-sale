import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Navbar from "../components/Navbar";
import "./Cart.css";
import { Link } from "react-router-dom";
function Cart() {

    const {
        cartItems,
        increaseQuantity,
        decreaseQuantity,
        removeItem
    } = useContext(CartContext);

    // TOTAL PRICE
    const totalPrice = cartItems.reduce(

        (total, item) => total + item.price * item.quantity,

        0
    );

    return (

        <div>

            <Navbar />

            <div className="cart-page">

                <h1>Your Cart</h1>

                {
                    cartItems.length === 0 ? (

                        <h2>Cart is Empty</h2>

                    ) : (

                        cartItems.map((item) => (

                            <div className="cart-item" key={item.id}>

                                <img
                                    src={item.image}
                                    alt={item.name}
                                />

                                <div className="cart-details">

                                    <h3>{item.name}</h3>

                                    <p>₹ {item.price}</p>

                                    <div className="quantity-box">

                                        <button
                                            onClick={() =>
                                                decreaseQuantity(item.id)
                                            }
                                        >
                                            -
                                        </button>

                                        <span>
                                            {item.quantity}
                                        </span>

                                        <button
                                            onClick={() =>
                                                increaseQuantity(item.id)
                                            }
                                        >
                                            +
                                        </button>

                                    </div>

                                    <button
                                        className="remove-btn"
                                        onClick={() =>
                                            removeItem(item.id)
                                        }
                                    >
                                        Remove
                                    </button>

                                </div>

                            </div>
                        ))
                    )
                }

                <h2 className="total-price">
                    Total : ₹ {totalPrice}
                </h2>
                <Link to="/checkout">

    <button className="checkout-btn">
        Proceed To Checkout
    </button>

</Link>
            </div>

        </div>
    )
}

export default Cart;