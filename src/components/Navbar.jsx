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
                MaKan
            </div>

            <ul className="nav-links">
                <Link to="/products">
                 <li>Shop</li>
                 </Link>
                <a href="#categories">
                <li>Service</li>
                </a>
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