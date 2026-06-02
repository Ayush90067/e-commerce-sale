import "./WhyChooseUs.css";

function WhyChooseUs() {
  return (
    <section className="why-section">
      <div className="why-container">

        <h2 className="why-title">Why Choose Us?</h2>

        <p className="why-subtitle">
          We provide premium construction materials with reliable service,
          competitive pricing, and fast delivery.
        </p>

        <div className="why-grid">

          <div className="why-card">
            <div className="icon">🏗️</div>
            <h3>Quality Materials</h3>
            <p>
              We source products from trusted brands to ensure durability
              and strength for every project.
            </p>
          </div>

          <div className="why-card">
            <div className="icon">🚚</div>
            <h3>Fast Delivery</h3>
            <p>
              Get your construction materials delivered directly to your
              site on time and hassle-free.
            </p>
          </div>

          <div className="why-card">
            <div className="icon">💰</div>
            <h3>Best Prices</h3>
            <p>
              Competitive pricing with transparent costs and no hidden
              charges.
            </p>
          </div>

          <div className="why-card">
            <div className="icon">🛡️</div>
            <h3>Trusted Suppliers</h3>
            <p>
              We partner with verified suppliers and leading brands across
              the construction industry.
            </p>
          </div>

          <div className="why-card">
            <div className="icon">📞</div>
            <h3>24/7 Support</h3>
            <p>
              Our support team is always available to assist with orders
              and product inquiries.
            </p>
          </div>

          <div className="why-card">
            <div className="icon">🏠</div>
            <h3>For Every Project</h3>
            <p>
              Whether it's a home, office, or large commercial project,
              we have the right materials for you.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;