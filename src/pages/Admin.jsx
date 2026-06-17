import { useState, useEffect } from "react";

import {
getProducts,
addProduct,
deleteProduct,
getAllOrders,
updateOrderStatus,
updateProduct
} from "../services/api";

import Navbar from "../components/Navbar";
import "./Admin.css";

function Admin() {

 const [editingId,
    setEditingId] =
    useState(null);

const [products, setProducts] =
    useState([]);

const [orders, setOrders] =
    useState([]);

const [totalRevenue,
    setTotalRevenue] =
    useState(0);

const [formData,
    setFormData] =
    useState({
        name: "",
        price: "",
        category: "",
        description: "",
        image: ""
    });

useEffect(() => {

    loadProducts();
    loadOrders();

}, []);

const loadProducts = async () => {

    try {

        const response =
            await getProducts();

        setProducts(
            response.data
        );

    } catch (error) {

        console.log(error);
    }
};

const loadOrders = async () => {

    try {

        const response =
            await getAllOrders();

        setOrders(
            response.data
        );

        const revenue =
            response.data.reduce(

                (sum, order) =>
                    sum + order.totalAmount,

                0
            );

        setTotalRevenue(
            revenue
        );

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

        if (editingId) {

            await updateProduct(
                editingId,
                formData
            );

            alert(
                "Product Updated Successfully"
            );

        } else {

            await addProduct(
                formData
            );

            alert(
                "Product Added Successfully"
            );
        }

        setEditingId(null);

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

        alert(
            "Product Deleted Successfully"
        );

        loadProducts();

    } catch (error) {

        console.log(error);
    }
};

const handleDelivered = async (id) => {

    try {

        await updateOrderStatus(
            id,
            "Delivered"
        );

        alert(
            "Order Marked Delivered"
        );

        loadOrders();

    } catch (error) {

        console.log(error);

        alert(
            "Failed To Update Status"
        );
    }
};

return (

    <>
        <Navbar />

        <div className="admin-page">

            <h1>
                Admin Dashboard
            </h1>

            <div className="stats-container">

                <div className="stat-card">

                    <h2>
                        {products.length}
                    </h2>

                    <p>
                        Products
                    </p>

                </div>

                <div className="stat-card">

                    <h2>
                        {orders.length}
                    </h2>

                    <p>
                        Orders
                    </p>

                </div>

                <div className="stat-card">

                    <h2>
                        ₹{totalRevenue}
                    </h2>

                    <p>
                        Revenue
                    </p>

                </div>

            </div>

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

                    <option value="Wall Paint">
                        Wall Paint
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

    {
        editingId
            ? "Update Product"
            : "Add Product"
    }

</button>
{
    editingId && (

        <button
            type="button"
            className="cancel-btn"
            onClick={() => {

                setEditingId(null);

                setFormData({

                    name: "",
                    price: "",
                    category: "",
                    description: "",
                    image: ""

                });

            }}
        >
            Cancel Edit
        </button>

    )
}

            </form>

            <h2
                className="admin-section-title"
            >
                Products
            </h2>

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
                        <div className="admin-actions">

    <button
        className="edit-btn"
        onClick={() => {

            setEditingId(
                product.id
            );

            setFormData({

                name:
                    product.name,

                price:
                    product.price,

                category:
                    product.category,

                description:
                    product.description,

                image:
                    product.image
            });

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }}
    >
        Edit
    </button>

    <button
        className="delete-btn"
        onClick={() =>
            handleDelete(
                product.id
            )
        }
    >
        Delete
    </button>

</div>
                        

                    </div>

                ))}

            </div>

            <h2
                className="admin-section-title"
            >
                Customer Orders
            </h2>

            <div className="orders-container">

                {
                    orders.length === 0 ? (

                        <h3>
                            No Orders Found
                        </h3>

                    ) : (

                        orders.map(order => (

                            <div
                                key={order.id}
                                className="order-card"
                            >

                                <div
                                    className="order-header"
                                >

                                    <h3>
                                        Order #
                                        {order.id}
                                    </h3>

                                    <span
                                        className={`status ${order.status.toLowerCase()}`}
                                    >
                                        {order.status}
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
                                        Email:
                                    </strong>
                                    {" "}
                                    {order.userEmail}
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

                                {
                                    order.status !== "Delivered" && (

                                        <button
                                            className="deliver-btn"
                                            onClick={() =>
                                                handleDelivered(
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
                    )
                }

            </div>

        </div>
    </>
);


}

export default Admin;

