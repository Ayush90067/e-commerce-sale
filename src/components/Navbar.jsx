import { Link } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaShoppingCart, FaWhatsapp } from "react-icons/fa";

function Navbar() {


const { cartItems } =
    useContext(CartContext);

const userName =
    localStorage.getItem("name");

const email =
    localStorage.getItem("email");

const role =
    localStorage.getItem("role");

const logout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("role");
    localStorage.removeItem("name");

    alert("Logged Out Successfully");

    window.location.href = "/";
};

return (

    <nav className="navbar">

        <div className="logo">
            <Link to="/">
                MaKan
            </Link>
        </div>

        <ul className="nav-links">

            <Link to="/">
                <li>Home</li>
            </Link>

            <Link to="/products">
                <li>Shop</li>
            </Link>

            <Link to="/categories">
                <li>Services</li>
            </Link>

            <Link to="/about">
                <li>About Us</li>
            </Link>

            {email && (
                <Link to="/my-orders">
                    <li>My Orders</li>
                </Link>
            )}

            {role === "ADMIN" && (
                <Link to="/admin">
                    <li>Admin</li>
                </Link>
            )}
            {role === "ADMIN" && (

    <Link to="/admin/orders">
        <li>Orders</li>
    </Link>

)}

            {email ? (

                <>
                    <li className="user-name">
                        👤 {userName || email}
                    </li>

                    <li
                        className="logout-btn"
                        onClick={logout}
                    >
                        Logout
                    </li>
                </>

            ) : (

                <Link to="/login">
                    <li>Login</li>
                </Link>

            )}

        </ul>

        <div className="navbar-right">

            <a
                href="https://wa.me/919006791742"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-icon"
            >
                <FaWhatsapp />
            </a>

            <Link to="/cart">

                <div className="cart-icon">

                    <FaShoppingCart />

                    <span className="cart-count">
                        {cartItems.length}
                    </span>

                </div>

            </Link>

        </div>

    </nav>
);


}

export default Navbar;
