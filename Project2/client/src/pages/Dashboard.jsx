import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 text-white flex flex-col items-center justify-center">

      <div className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-xl text-center">
        <h1 className="text-3xl font-bold mb-4">
          🎉 Welcome to Dashboard
        </h1>

        <p className="text-gray-300 mb-6">
          You are successfully authenticated 🚀
        </p>

        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;