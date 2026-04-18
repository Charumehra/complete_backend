import React, { useState } from "react";
import API from "../api/axios";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/register", form);
      localStorage.setItem("token", res.data.token);
    //   navigate("/dashboard");
    } catch {
      alert("Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      
      <form
        onSubmit={handleSubmit}
        className="backdrop-blur-lg bg-white/20 border border-white/30 p-8 rounded-2xl shadow-xl w-96 space-y-5"
      >
        <h2 className="text-2xl font-bold text-white text-center">
          Create Account
        </h2>

        <input
          type="text"
          placeholder="Username"
          className="w-full p-3 rounded-lg bg-white/30 text-white placeholder-white outline-none focus:ring-2 focus:ring-white"
          onChange={(e) =>
            setForm({ ...form, username: e.target.value })
          }
        />

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
          Sign Up
        </button>

        <p className="text-center text-white text-sm">
          Already have an account?{" "}
          <Link to="/login" className="underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;