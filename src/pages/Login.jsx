import { useState } from "react";
import api from "../services/api";

function Login() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const response =
              await api.post(
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
          "role",
          response.data.role
      );

      localStorage.setItem(
          "email",
          response.data.email
      );

      alert("Login Successful");

    } catch(error) {

      alert("Invalid Credentials");
    }
  };

  return (
      <form onSubmit={handleLogin}>

          <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e)=>
                  setEmail(e.target.value)
              }
          />

          <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e)=>
                  setPassword(e.target.value)
              }
          />

          <button type="submit">
              Login
          </button>

      </form>
  );
}

export default Login;