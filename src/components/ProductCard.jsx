import { Link } from "react-router-dom";
import "./ProductCard.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { toast } from "react-toastify";

function ProductCard({ id, name, price, image }) {

    const { addToCart } = useContext(CartContext);

    const product = {
        id,
        name,
        price,
        image
    };

    return (

        <div className="product-card">

            <img src={image} alt={name} />

            <h3>{name}</h3>

            <p>₹ {price}</p>

            <div className="product-buttons">

             <button
            onClick={() => {addToCart(product);
                toast.success("Product Added To CArt");

            }}
              >
            Add to Cart
            </button>

             <Link to={`/product/${id}`}>

            <button className="details-btn">
                Details
             </button>

    </Link>

</div>

    </div>
    )
}

export default ProductCard;