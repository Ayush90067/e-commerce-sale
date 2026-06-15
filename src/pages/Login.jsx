import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import "./Login.css";

function Login() {


const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const navigate = useNavigate();

const handleLogin = async (e) => {

    e.preventDefault();

    try {

        const response = await api.post(
            "/auth/login",
            {
                email,
                password
            }
        );

        localStorage.setItem(
            "token",
            response.data.token
        );

        localStorage.setItem(
            "email",
            response.data.email
        );

        localStorage.setItem(
            "name",
            response.data.name
        );

        localStorage.setItem(
            "role",
            response.data.role
        );

        alert("Login Successful");

        navigate("/");

    } catch (error) {

        console.log(error);

        alert("Invalid Credentials");
    }
};

return (

    <div className="login-page">

        <div className="login-container">

            <div className="login-logo">
                🏗️ MaKan
            </div>

            <h2 className="login-title">
                Welcome Back
            </h2>

            <p className="login-subtitle">
                Login to continue shopping
            </p>

            <form
                className="login-form"
                onSubmit={handleLogin}
            >

                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) =>
                        setEmail(e.target.value)
                    }
                    required
                />

                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) =>
                        setPassword(e.target.value)
                    }
                    required
                />

                <button
                    type="submit"
                    className="login-btn"
                >
                    Login
                </button>

            </form>

            <div className="login-footer">

                <p>
                    Don't have an account?
                </p>

                <Link to="/register">
                    Register Here
                </Link>

            </div>

        </div>

    </div>
);


}

export default Login;
