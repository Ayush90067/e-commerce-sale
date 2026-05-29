import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {

    const { cartItems } = useContext(CartContext);

    return (
        <nav className="navbar">

            <div className="logo">
                ShopEasy
            </div>

            <ul className="nav-links">
                <Link to="/">
                 <li>Home</li>
                 </Link>
                <li>Products</li>
                <Link to="/login">
                    <li>Login</li>
                </Link>
                
            </ul>

           <Link to="/cart">
            <div className="cart-icon">

                <FaShoppingCart />

                <span className="cart-count">
                    {cartItems.length}
                </span>

            </div>
        </Link>
        </nav>
    )
}

export default Navbar;