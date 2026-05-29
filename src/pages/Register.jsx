import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import "./Auth.css";

function Register() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            await API.post("/auth/register", form);

            alert("Registered Successfully 🚀");

            navigate("/login");

        } catch (err) {
            alert("Registration failed");
        }
    };

    return (
        <div className="auth-container">

            <form className="auth-box" onSubmit={handleRegister}>

                <h2>Register</h2>

                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                    required
                />

                <button type="submit">Register</button>

                <p>
                    Already have account?{" "}
                    <span onClick={() => navigate("/login")}>
                        Login here
                    </span>
                </p>

            </form>

        </div>
    );
}

export default Register;