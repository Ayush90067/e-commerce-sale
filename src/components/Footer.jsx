import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company Info */}
        <div className="footer-section">
          <h2 className="footer-logo">MaKan</h2>

          <p>
            Your trusted partner for premium construction materials.
            From cement and bricks to steel and AAC blocks, we
            deliver quality products for every project.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>

          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="#categories">Categories</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div className="footer-section">
          <h3>Categories</h3>

          <ul>
            <li><a href="#categories">Cement</a></li>
            <li><a href="#categories">Bricks</a></li>
            <li><a href="#categories">TMT Bars</a></li>
            <li><a href="#categories">AAC Blocks</a></li>
            <li><a href="#categories">Wall Putty</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact Us</h3>

          <p>📍 Sherghati,Gaya ji, Bihar</p>
          <p>📞 +91 9006791742</p>
          <p>✉ support@MaKan.com</p>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p>
          © 2026 Makan. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;