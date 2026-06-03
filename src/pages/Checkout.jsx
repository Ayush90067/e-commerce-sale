import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import Navbar from "../components/Navbar";
import "./Checkout.css";

function Checkout() {

    const { cartItems, clearCart } =
        useContext(CartContext);

    const [customer, setCustomer] = useState({
        name: "",
        phone: "",
        address: ""
    });

    const handleChange = (e) => {

        setCustomer({
            ...customer,
            [e.target.name]: e.target.value
        });
    };

    const placeOrder = () => {

        let orderText =
            `Hello MaKan,%0A%0A`;

        orderText +=
            `Customer Name: ${customer.name}%0A`;

        orderText +=
            `Phone: ${customer.phone}%0A`;

        orderText +=
            `Address: ${customer.address}%0A%0A`;

        orderText += `Order Details:%0A`;

        cartItems.forEach(item => {

            orderText +=
                `${item.name} x ${item.quantity}%0A`;
        });

        window.open(
            `https://wa.me/919006791742?text=${orderText}`,
            "_blank"
        );

        clearCart();
    };

    return (
        <>
            <Navbar />

            <div className="checkout-container">

                <h1>Checkout</h1>

                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    onChange={handleChange}
                />

                <textarea
                    name="address"
                    placeholder="Delivery Address"
                    onChange={handleChange}
                />

                <button onClick={placeOrder}>
                    Place Order on WhatsApp
                </button>

            </div>
        </>
    );
}

export default Checkout;