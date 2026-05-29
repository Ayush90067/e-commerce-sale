import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import "./Auth.css";

function Login() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await API.post("/auth/login", form);

            localStorage.setItem("token", res.data.token);

            alert("Login Successful 🚀");

            navigate("/");
        } catch (err) {
            setError("Invalid email or password");
        }
    };

    return (
        <div className="auth-container">

            <form className="auth-box" onSubmit={handleLogin}>

                <h2>Login</h2>

                {error && <p className="error">{error}</p>}

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

                <button type="submit">Login</button>

                <p>
                    New user?{" "}
                    <span onClick={() => navigate("/register")}>
                        Register here
                    </span>
                </p>

            </form>

        </div>
    );
}

export default Login;