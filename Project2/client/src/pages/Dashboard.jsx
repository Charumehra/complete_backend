import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-slate-800 text-white flex items-center justify-center relative overflow-hidden">
      <div className="absolute w-72 h-72 bg-indigo-600 rounded-full blur-3xl opacity-20 top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-pink-600 rounded-full blur-3xl opacity-20 bottom-10 right-10"></div>

      <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-3xl shadow-2xl text-center w-[90%] max-w-md hover:scale-[1.02] transition">
        <div className="text-5xl mb-4">🎉</div>

        <h1 className="text-3xl font-bold mb-3">
          Welcome Back
        </h1>

        <p className="text-gray-300 mb-8">
          You are successfully authenticated and ready to explore 🚀
        </p>

        <button
          onClick={logout}
          className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 px-5 py-3 rounded-xl font-semibold shadow-lg hover:shadow-red-500/30 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;