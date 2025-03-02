import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export const ProfilePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 text-yellow-400 hover:text-yellow-300 text-lg flex items-center"
      >
        <FaArrowLeft className="mr-2" size={20} />
        Back
      </button>

      {/* Profile Section */}
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-md text-center">
        <img
          src="https://avatar.iran.liara.run/public"
          alt="User Avatar"
          className="w-24 h-24 rounded-full mx-auto border-4 border-yellow-400 shadow-md"
        />
        <h2 className="text-2xl font-bold mt-3">John Doe</h2>
        <p className="text-gray-400 text-sm">@johndoe</p>
        <p className="text-gray-300 text-center text-sm mt-1">
          Full Stack Developer | Open Source Contributor
        </p>

        {/* Logout Button */}
        <button
          className="mt-4 w-full bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md font-semibold"
          onClick={() => alert("Logged out!")}
        >
          🚪 Logout
        </button>
      </div>
    </div>
  );
};
