import React, { useState } from "react";
import API from "../api/axios";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", form);
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch {
      alert("Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500">
      
      <form
        onSubmit={handleSubmit}
        className="backdrop-blur-lg bg-white/20 border border-white/30 p-8 rounded-2xl shadow-xl w-96 space-y-5"
      >
        <h2 className="text-2xl font-bold text-white text-center">
          Welcome Back
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-lg bg-white/30 text-white placeholder-white outline-none focus:ring-2 focus:ring-white"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded-lg bg-white/30 text-white placeholder-white outline-none focus:ring-2 focus:ring-white"
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <button className="w-full bg-white text-indigo-600 font-semibold py-2 rounded-lg hover:bg-gray-200 transition">
          Login
        </button>

        <p className="text-center text-white text-sm">
          New user?{" "}
          <Link to="/" className="underline">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;