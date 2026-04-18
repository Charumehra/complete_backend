import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white">
      <div className="flex justify-between items-center px-8 py-4 bg-white/10 backdrop-blur-lg border-b border-white/10">
        <h1 className="text-xl font-semibold">My Dashboard</h1>

        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-sm transition"
        >
          Logout
        </button>
      </div>

      <div className="p-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Welcome back 👋</h2>
          <p className="text-gray-400">
            Here’s what’s happening with your account today.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:scale-105 transition">
            <h3 className="text-lg font-semibold mb-2">Profile</h3>
            <p className="text-gray-300 text-sm">
              Manage your personal information and settings.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:scale-105 transition">
            <h3 className="text-lg font-semibold mb-2">Activity</h3>
            <p className="text-gray-300 text-sm">
              Track your recent activity and actions.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:scale-105 transition">
            <h3 className="text-lg font-semibold mb-2">Settings</h3>
            <p className="text-gray-300 text-sm">
              Customize your preferences and account.
            </p>
          </div>
        </div>

        <div className="mt-10 bg-white/10 backdrop-blur-lg p-6 rounded-2xl">
          <h3 className="text-xl font-semibold mb-3">Quick Info</h3>
          <p className="text-gray-300">
            You are successfully logged in. This is your protected dashboard area.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;