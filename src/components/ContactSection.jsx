import { useState } from "react";
import "./ContactSection.css";

function ContactSection() {

    const [formData, setFormData] = useState({

        name: "",
        email: "",
        phone: "",
        material: "",
        message: ""

    });

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]:
                e.target.value

        });
    };

    const handleQuote = (e) => {

        e.preventDefault();

        const whatsappMessage =
            encodeURIComponent(

`Hello MaKan,

Name: ${formData.name}

Email: ${formData.email}

Phone: ${formData.phone}

Material Required: ${formData.material}

Query:
${formData.message}`
            );

        window.open(

            `https://wa.me/919006791742?text=${whatsappMessage}`,

            "_blank"
        );
    };

    return (

        <section
            id="contact"
            className="contact-section"
        >

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

                        <p>
                            📍 Sherghati, Gaya, Bihar
                        </p>

                        <p>
                            📞 +91 9006791742
                        </p>

                        <p>
                            ✉ ayushraj90067@gmail.com
                        </p>

                    </div>

                </div>

                <div className="contact-form-container">

                    <form
                        className="contact-form"
                        onSubmit={handleQuote}
                    >

                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />

                        <select
                            name="material"
                            value={formData.material}
                            onChange={handleChange}
                            required
                        >

                            <option value="">
                                Select Material
                            </option>

                            <option value="Cement">
                                Cement
                            </option>

                            <option value="Bricks">
                                Bricks
                            </option>

                            <option value="TMT Bars">
                                TMT Bars
                            </option>

                            <option value="AAC Blocks">
                                AAC Blocks
                            </option>

                            <option value="Wall Putty">
                                Wall Putty
                            </option>

                            <option value="RMC">
                                RMC
                            </option>

                        </select>

                        <textarea
                            rows="5"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Ask your query or request a quotation..."
                            required
                        />

                        <button
                            type="submit"
                        >
                            Request Quote On WhatsApp
                        </button>

                    </form>

                </div>

            </div>

        </section>
    );
}

export default ContactSection;