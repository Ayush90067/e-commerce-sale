import { useParams } from "react-router-dom";
import products from "../data/products";
import Navbar from "../components/Navbar";
import "./ProductDetails.css";

function ProductDetails() {

    const { id } = useParams();

    const product = products.find(
        (item) => item.id === Number(id)
    );

    return (

        <div>

            <Navbar />

            <div className="details-page">

                <img
                    src={product.image}
                    alt={product.name}
                />

                <div className="details-content">

                    <h1>{product.name}</h1>

                    <h2>₹ {product.price}</h2>

                    <p>{product.description}</p>

                    <button>
                        Buy Now
                    </button>

                </div>

            </div>

        </div>
    )
}

export default ProductDetails;