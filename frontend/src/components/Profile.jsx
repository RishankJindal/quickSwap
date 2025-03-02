import React from "react";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const navigate = useNavigate();

  return (
    <div className="relative">
      {/* Profile Image (Navigates to Profile Page) */}
      <button
        onClick={() => navigate("/profile")}
        className="w-12 h-12 rounded-full border-2 border-white overflow-hidden"
      >
        <img
          src="https://avatar.iran.liara.run/public"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </button>
    </div>
  );
};
