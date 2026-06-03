import Navbar from "../components/Navbar"
import "./AboutUs.css";

function AboutUs() {
  return (
    <>
      <Navbar/>
      {/* HERO SECTION */}

      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About MaKan</h1>

          <p>
            Your Trusted Partner for Quality Construction Materials
            in Sherghati, Gaya and Across Bihar.
          </p>
        </div>
      </section>

      {/* COMPANY INTRODUCTION */}

      <section className="about-section">

        <div className="about-container">

          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200"
              alt="Construction"
            />
          </div>

          <div className="about-content">

            <h2>
              Welcome to <span>MaKan</span>
            </h2>

            <p>
              MaKan is a trusted supplier of premium construction
              materials dedicated to serving builders,
              contractors, engineers, developers, and homeowners.
            </p>

            <p>
              We provide a wide range of construction products
              including Cement, Bricks, TMT Bars, AAC Blocks,
              Ready Mix Concrete (RMC), Wall Putty, POP,
              Sand, Aggregates and more.
            </p>

            <p>
              Our mission is to make construction procurement
              simple, affordable, and reliable by offering
              quality products, transparent pricing and
              timely delivery.
            </p>

            <div className="about-stats">

              <div className="stat-box">
                <h3>500+</h3>
                <span>Happy Customers</span>
              </div>

              <div className="stat-box">
                <h3>1000+</h3>
                <span>Orders Delivered</span>
              </div>

              <div className="stat-box">
                <h3>50+</h3>
                <span>Trusted Suppliers</span>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* MISSION & VISION */}

      <section className="mission-section">

        <h2>Mission & Vision</h2>

        <div className="mission-container">

          <div className="mission-card">
            <h3>🎯 Our Mission</h3>

            <p>
              To provide premium-quality construction materials
              at competitive prices while ensuring timely
              delivery and excellent customer support.
            </p>
          </div>

          <div className="mission-card">
            <h3>🚀 Our Vision</h3>

            <p>
              To become the most trusted construction material
              supplier across Bihar by delivering value,
              reliability and customer satisfaction.
            </p>
          </div>

        </div>

      </section>

      {/* WHY CHOOSE US */}

      <section className="why-about">

        <h2>Why Choose MaKan?</h2>

        <div className="why-grid">

          <div className="why-box">
            <h3>Quality Materials</h3>
            <p>
              Premium products sourced from trusted suppliers.
            </p>
          </div>

          <div className="why-box">
            <h3>Competitive Pricing</h3>
            <p>
              Best market rates without compromising quality.
            </p>
          </div>

          <div className="why-box">
            <h3>Fast Delivery</h3>
            <p>
              On-time delivery directly to your project site.
            </p>
          </div>

          <div className="why-box">
            <h3>Customer Support</h3>
            <p>
              Dedicated assistance before and after purchase.
            </p>
          </div>

        </div>

      </section>

      {/* BRANDS */}

      <section className="brands-section">

        <h2>Brands We Deal In</h2>

        <div className="brands-grid">

          <div>UltraTech</div>
          <div>ACC</div>
          <div>Ambuja</div>
          <div>JK Cement</div>
          <div>Tata Steel</div>
          <div>JSW Steel</div>

        </div>

      </section>

      {/* SERVICE AREAS */}

      <section className="service-area">

        <h2>Areas We Serve</h2>

        <p>
          Delivering quality construction materials across Bihar.
        </p>

        <div className="area-list">

          <span>Sherghati</span>
          <span>Gaya</span>
          <span>Bodh Gaya</span>
          <span>Dobhi</span>
          <span>Amas</span>
          <span>Aurangabad</span>
          <span>Nawada</span>

        </div>

      </section>

      {/* LOCATION */}

      <section className="location-section">

        <h2>Visit Our Location</h2>

        <p>Sherghati, Gaya, Bihar, India</p>

        <iframe
          title="location"
          src="https://maps.google.com/maps?q=Sherghati%20Gaya%20Bihar&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="400"
          style={{
            border: 0,
            borderRadius: "15px"
          }}
          loading="lazy"
        ></iframe>

      </section>
    </>
  );
}

export default AboutUs;