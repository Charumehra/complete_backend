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
          name="username"
          value={form.username}
          placeholder="Username"
          className="w-full p-3 rounded-lg bg-white/30 text-white placeholder-white outline-none focus:ring-2 focus:ring-white"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          value={form.email}
          placeholder="Email"
          className="w-full p-3 rounded-lg bg-white/30 text-white placeholder-white outline-none focus:ring-2 focus:ring-white"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          value={form.password}
          placeholder="Password"
          className="w-full p-3 rounded-lg bg-white/30 text-white placeholder-white outline-none focus:ring-2 focus:ring-white"
          onChange={handleChange}
        />

        <button
          disabled={loading}
          className="w-full bg-white text-indigo-600 font-semibold py-2 rounded-lg hover:bg-gray-200 transition disabled:opacity-50"
        >
          {loading ? "Creating..." : "Sign Up"}
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