import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getMyOrders } from "../services/api";
import "./MyOrders.css";
import { Link } from "react-router-dom";
function MyOrders() {


const [orders, setOrders] =
    useState([]);

const [loading, setLoading] =
    useState(true);

useEffect(() => {

    loadOrders();

}, []);

const loadOrders = async () => {

    try {

        const email =
            localStorage.getItem(
                "email"
            );

        const response =
            await getMyOrders(
                email
            );

        setOrders(
            response.data
        );

    } catch (error) {

        console.log(error);

    } finally {

        setLoading(false);
    }
};

if (loading) {

    return (
        <>
            <Navbar />
            <h2
                style={{
                    textAlign: "center",
                    marginTop: "100px"
                }}
            >
                Loading Orders...
            </h2>
        </>
    );
}

return (

    <>
        <Navbar />

        <div className="my-orders-container">

            <h1>
                My Orders
            </h1>

            {
                orders.length === 0 ? (

                    <div className="empty-orders">

    <h2>
        No Orders Found
    </h2>

    <p>
        You haven't placed any orders yet.
    </p>

    <Link to="/products">

        <button className="shop-now-btn">
            Shop Now
        </button>

    </Link>

</div>

                ) : (

                    orders.map(order => (

                        <div
                            key={order.id}
                            className="order-card"
                        >

                            <div className="order-header">

                                <h3>
                                    Order #
                                    {order.id}
                                </h3>

                                <span
    className={`status ${
        order.status === "Delivered"
            ? "delivered"
            : "pending"
    }`}
>
    {
        order.status === "Delivered"
            ? "✅ Delivered"
            : "⏳ Pending"
    }
</span>

                            </div>

                            <p>
                                <strong>
                                    Customer:
                                </strong>
                                {" "}
                                {order.customerName}
                            </p>

                            <p>
                                <strong>
                                    Phone:
                                </strong>
                                {" "}
                                {order.phone}
                            </p>

                            <p>
                                <strong>
                                    Address:
                                </strong>
                                {" "}
                                {order.address}
                            </p>

                            <p>
                                <strong>
                                    Total:
                                </strong>
                                {" "}
                                ₹{order.totalAmount}
                            </p>

                            <h4>
                                Ordered Items
                            </h4>

                            {
                                order.items &&
                                order.items.map(item => (

                                    <div
                                        key={item.id}
                                        className="order-item"
                                    >

                                        <span>
                                            {item.productName}
                                        </span>

                                        <span>
                                            {item.quantity}
                                            {" "}x ₹
                                            {item.price}
                                        </span>

                                    </div>

                                ))
                            }

                        </div>

                    ))
                )
            }

        </div>

    </>
);


}

export default MyOrders;
