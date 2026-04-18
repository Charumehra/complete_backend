import React, { useState } from "react";
import API from "../api/axios";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.username || !form.email || !form.password) {
      alert("All fields are required");
      return;
    }

    try {
      setLoading(true);
      const res = await API.post("/auth/register", form);

      if (res.data?.token) {
        localStorage.setItem("token", res.data.token);
      }

      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
      
      <div className="absolute w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-30 top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-indigo-500 rounded-full blur-3xl opacity-30 bottom-10 right-10"></div>

      <form
        onSubmit={handleSubmit}
        className="relative z-10 backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-3xl shadow-2xl w-96 space-y-6 transition hover:shadow-pink-500/20"
      >
        <h2 className="text-3xl font-bold text-white text-center tracking-wide">
          Create Account
        </h2>

        <div className="space-y-4">
          <input
            type="text"
            name="username"
            value={form.username}
            placeholder="Username"
            className="w-full p-3 rounded-xl bg-white/20 text-white placeholder-gray-200 outline-none focus:ring-2 focus:ring-pink-400 focus:bg-white/30 transition"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            value={form.email}
            placeholder="Email"
            className="w-full p-3 rounded-xl bg-white/20 text-white placeholder-gray-200 outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white/30 transition"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            value={form.password}
            placeholder="Password"
            className="w-full p-3 rounded-xl bg-white/20 text-white placeholder-gray-200 outline-none focus:ring-2 focus:ring-indigo-400 focus:bg-white/30 transition"
            onChange={handleChange}
          />
        </div>

        <button
          disabled={loading}
          className="w-full bg-gradient-to-r from-pink-500 to-indigo-500 text-white font-semibold py-3 rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition disabled:opacity-50 disabled:hover:scale-100"
        >
          {loading ? "Creating..." : "Sign Up"}
        </button>

        <p className="text-center text-gray-200 text-sm">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-white hover:underline"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;