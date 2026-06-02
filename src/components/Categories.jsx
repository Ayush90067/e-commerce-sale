import "./Categories.css";
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "Bricks",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800",
  },
  {
    id: 2,
    name: "Cement",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800",
  },
  {
    id: 3,
    name: "RMC",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800",
  },
  {
    id: 4,
    name: "Wall Paints",
    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800",
  },
  {
    id: 5,
    name: "POP",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800",
  },
  {
    id: 6,
    name: "AAC Blocks",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800",
  },
];

function Categories() {
  return (
    <section  id="categories"className="categories-section">
      <div className="categories-container">

        <h2 className="categories-title">
          Our <span>Categories</span>
        </h2>

        <p className="categories-subtitle">
          Explore premium construction materials for every stage of your project.
        </p>

        <div className="categories-grid">
          {categories.map((category) => (
            <div className="category-card" key={category.id}>
              <img
                src={category.image}
                alt={category.name}
                className="category-image"
              />

              <div className="category-overlay">
                <h3>{category.name}</h3>
                <Link to="/products">
                <button>Explore</button>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Categories;