import "./FeaturedProducts.css";

const products = [
  {
    id: 1,
    name: "UltraTech Cement",
    price: "₹420 / Bag",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800",
  },
  {
    id: 2,
    name: "Red Bricks",
    price: "₹8 / Piece",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800",
  },
  {
    id: 3,
    name: "AAC Blocks",
    price: "₹65 / Block",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800",
  },
  {
    id: 4,
    name: "TMT Steel Bar",
    price: "₹72 / Kg",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800",
  },
  {
    id: 5,
    name: "Wall Putty",
    price: "₹850 / Bag",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800",
  },
  {
    id: 6,
    name: "RMC Concrete",
    price: "₹5500 / m³",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800",
  },
];

function FeaturedProducts() {
  return (
    <section className="featured-section">
      <div className="featured-container">

        <h2 className="featured-title">
          Featured <span>Products</span>
        </h2>

        <p className="featured-subtitle">
          High-quality construction materials trusted by builders and contractors.
        </p>

        <div className="featured-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>

              <div className="product-image-box">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
              </div>

              <div className="product-content">
                <h3>{product.name}</h3>

                <div className="product-rating">
                  ⭐⭐⭐⭐⭐
                </div>

                <p className="product-price">
                  {product.price}
                </p>

                <button className="cart-btn">
                  Add To Cart
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FeaturedProducts;