import "./ContactSection.css";

function ContactSection() {
  return (
    <section id="contact" className="contact-section">

      <div className="contact-container">

        <div className="contact-info">
          <h2>
            Request a <span>Free Quote</span>
          </h2>

          <p>
            Need construction materials for your project?
            Contact us today and get the best prices on
            Cement, Bricks, TMT Bars, AAC Blocks,
            Wall Putty, and more.
          </p>

          <div className="contact-details">
            <p>📍 Sherghati,Gaya, Bihar</p>
            <p>📞 +91 9006791742</p>
            <p>✉ support@makan.com</p>
          </div>
        </div>

        <div className="contact-form-container">

          <form className="contact-form">

            <input
              type="text"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              required
            />

            <input
              type="tel"
              placeholder="Phone Number"
              required
            />

            <select>
              <option>Select Material</option>
              <option>Cement</option>
              <option>Bricks</option>
              <option>TMT Bars</option>
              <option>AAC Blocks</option>
              <option>Wall Putty</option>
              <option>RMC</option>
            </select>

            <textarea
              rows="5"
              placeholder="Fill Free to Ask Your Query ...  Or Send FeedBack ..."
            ></textarea>

            <button type="submit">
              Request Quote
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default ContactSection;