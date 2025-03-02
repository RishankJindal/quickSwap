import { useState } from "react";
import { FiUsers, FiSettings, FiLogOut } from "react-icons/fi";
import { FaTasks } from "react-icons/fa";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("users");

  return (
    <div className="min-h-screen flex bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 p-6 space-y-6">
        <h1 className="text-2xl font-bold text-yellow-400">Admin Panel</h1>
        <nav className="space-y-3">
          <button
            className={`flex items-center gap-2 w-full p-3 rounded-lg ${
              activeTab === "users" ? "bg-yellow-400 text-black" : "hover:bg-gray-700"
            }`}
            onClick={() => setActiveTab("users")}
          >
            <FiUsers className="text-lg" /> Manage Users
          </button>
          <button
            className={`flex items-center gap-2 w-full p-3 rounded-lg ${
              activeTab === "skills" ? "bg-yellow-400 text-black" : "hover:bg-gray-700"
            }`}
            onClick={() => setActiveTab("skills")}
          >
            <FaTasks className="text-lg" /> Manage Skills
          </button>
          <button
            className="flex items-center gap-2 w-full p-3 rounded-lg hover:bg-gray-700"
          >
            <FiSettings className="text-lg" /> Settings
          </button>
          <button
            className="flex items-center gap-2 w-full p-3 rounded-lg text-red-500 hover:bg-gray-700"
          >
            <FiLogOut className="text-lg" /> Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {activeTab === "users" && (
          <section>
            <h2 className="text-3xl font-semibold">Manage Users</h2>
            <div className="mt-4 bg-gray-800 p-4 rounded-lg">
              <p className="text-gray-300">List of registered users...</p>
            </div>
          </section>
        )}

        {activeTab === "skills" && (
          <section>
            <h2 className="text-3xl font-semibold">Manage Skills</h2>
            <div className="mt-4 bg-gray-800 p-4 rounded-lg">
              <p className="text-gray-300">List of offered skills...</p>
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
