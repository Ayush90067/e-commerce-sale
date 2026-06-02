import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Build Stronger. Build Smarter.</h1>

        <p>
          Your one-stop destination for premium construction materials.
          From Cement, Bricks, TMT Steel, Sand and AAC Blocks to Tiles
          and Plumbing Supplies, we deliver quality products directly
          to your construction site.
        </p>

        <div className="hero-buttons">
          <Link to="/products">
          <button className="primary-btn">
            Browse Products
          </button>
          </Link>
          <button className="secondary-btn">
           <a href="#contact"> Get Free Quote</a>
          </button>
        </div>

        <div className="hero-stats">
          <div>
            <h3>10K+</h3>
            <span>Orders Delivered</span>
          </div>

          <div>
            <h3>500+</h3>
            <span>Trusted Builders</span>
          </div>

          <div>
            <h3>100+</h3>
            <span>Products</span>
          </div>

          <div>
            <h3>24/7</h3>
            <span>Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;