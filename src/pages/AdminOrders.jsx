import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";

import {
getAllOrders,
updateOrderStatus
} from "../services/api";

function AdminOrders() {


const [orders, setOrders] =
    useState([]);

useEffect(() => {

    loadOrders();

}, []);

const loadOrders = async () => {

    try {

        const response =
            await getAllOrders();

        setOrders(
            response.data
        );

    } catch (error) {

        console.log(error);
    }
};

const markDelivered =
    async (id) => {

        try {

            await updateOrderStatus(
                id,
                "Delivered"
            );

            alert(
                "Order Delivered"
            );

            loadOrders();

        } catch (error) {

            console.log(error);
        }
    };

return (

    <>
        <Navbar />

        <div
            style={{
                padding: "30px"
            }}
        >

            <h1>
                All Orders
            </h1>

            {
                orders.map(order => (

                    <div
                        key={order.id}
                        style={{
                            border:
                                "1px solid #ddd",
                            padding:
                                "20px",
                            marginBottom:
                                "20px",
                            borderRadius:
                                "10px"
                        }}
                    >

                        <h3>
                            Order #
                            {order.id}
                        </h3>

                        <p>
                            Customer:
                            {" "}
                            {
                                order.customerName
                            }
                        </p>

                        <p>
                            Email:
                            {" "}
                            {
                                order.userEmail
                            }
                        </p>

                        <p>
                            Total:
                            {" "}
                            ₹
                            {
                                order.totalAmount
                            }
                        </p>

                        <p>
                            Status:
                            {" "}
                            {
                                order.status
                            }
                        </p>

                        {
                            order.items &&
                            order.items.map(
                                item => (

                                    <div
                                        key={
                                            item.id
                                        }
                                    >
                                        {
                                            item.productName
                                        }
                                        {" "}
                                        x
                                        {" "}
                                        {
                                            item.quantity
                                        }
                                    </div>
                                )
                            )
                        }

                        {
                            order.status !==
                            "Delivered" && (

                                <button
                                    onClick={() =>
                                        markDelivered(
                                            order.id
                                        )
                                    }
                                >
                                    Mark Delivered
                                </button>

                            )
                        }

                    </div>

                ))
            }

        </div>

    </>
);


}

export default AdminOrders;
