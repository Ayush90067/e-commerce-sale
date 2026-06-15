import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Navbar from "../components/Navbar";
import { placeOrder } from "../services/api";
import "./Checkout.css";

function Checkout() {


const navigate = useNavigate();

const {
    cartItems,
    clearCart
} = useContext(CartContext);

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

const totalAmount =
    cartItems.reduce(
        (sum, item) =>
            sum +
            item.price * item.quantity,
        0
    );

// WhatsApp Order

const placeOrderWhatsApp = () => {

    if (cartItems.length === 0) {

        alert("Your cart is empty");
        return;
    }

    if (
        !customer.name ||
        !customer.phone ||
        !customer.address
    ) {

        alert("Please fill all details");
        return;
    }

    let orderText =
        `Hello MaKan,%0A%0A`;

    orderText +=
        `Customer Name: ${customer.name}%0A`;

    orderText +=
        `Phone: ${customer.phone}%0A`;

    orderText +=
        `Address: ${customer.address}%0A%0A`;

    orderText +=
        `Order Details:%0A`;

    cartItems.forEach(item => {

        orderText +=
            `${item.name} x ${item.quantity}%0A`;
    });

    orderText +=
        `%0ATotal Amount: ₹${totalAmount}`;

    window.open(
        `https://wa.me/919006791742?text=${orderText}`,
        "_blank"
    );
};

// Database Order

const handleOrder = async () => {

    if (cartItems.length === 0) {

        alert("Your cart is empty");
        return;
    }

    if (
        !customer.name ||
        !customer.phone ||
        !customer.address
    ) {

        alert("Please fill all details");
        return;
    }

    const orderData = {

        customerName:
            customer.name,

        phone:
            customer.phone,

        address:
            customer.address,

        userEmail:
            localStorage.getItem(
                "email"
            ),

        totalAmount:
            totalAmount,

        status:
            "Pending",

        items:
            cartItems.map(item => ({
                productId:
                    item.id,

                productName:
                    item.name,

                price:
                    item.price,

                quantity:
                    item.quantity
            }))
    };

    try {

        await placeOrder(
            orderData
        );

        alert(
            "Order Placed Successfully"
        );

        clearCart();

        navigate(
            "/my-orders"
        );

    } catch (error) {

        console.error(error);

        alert(
            "Failed To Place Order"
        );
    }
};

return (

    <>
        <Navbar />

        <div className="checkout-container">

            <h1>
                Checkout
            </h1>

            <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={customer.name}
                onChange={handleChange}
            />

            <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={customer.phone}
                onChange={handleChange}
            />

            <textarea
                name="address"
                placeholder="Delivery Address"
                value={customer.address}
                onChange={handleChange}
            />

            <div className="order-summary">

                <h2>
                    Order Summary
                </h2>

                {
                    cartItems.map(item => (

                        <div
                            key={item.id}
                            className="summary-item"
                        >

                            <span>
                                {item.name}
                            </span>

                            <span>
                                {item.quantity}
                                {" "}x ₹
                                {item.price}
                            </span>

                        </div>
                    ))
                }

                <h3>
                    Total Amount:
                    ₹{totalAmount}
                </h3>

            </div>

            <button
                className="whatsapp-btn"
                onClick={
                    placeOrderWhatsApp
                }
            >
                Place Order On WhatsApp
            </button>

            <button
                className="order-btn"
                onClick={
                    handleOrder
                }
            >
                Place Order
            </button>

        </div>

    </>
);


}

export default Checkout;
