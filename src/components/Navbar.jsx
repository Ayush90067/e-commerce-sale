import { Link } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaShoppingCart, FaWhatsapp } from "react-icons/fa";

function Navbar() {

    const { cartItems } = useContext(CartContext);

    const email = localStorage.getItem("email");

    const logout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("email");
        localStorage.removeItem("role");

        window.location.href = "/";
    };

    return (
        <nav className="navbar">

            <div className="logo">
                <Link to="/">MaKan</Link>
            </div>

            <ul className="nav-links">

                <Link to="/">
                    <li>Home</li>
                </Link>

                <Link to="/products">
                    <li>Shop</li>
                </Link>

                <a href="/categories">
                    <li>Service</li>
                </a>

                <Link to="/about">
                    <li>About Us</li>
                </Link>

                {email ? (
                    <>
                        <li className="user-name">
                            👤 {email}
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
                    href="https://wa.me/9006791742"
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