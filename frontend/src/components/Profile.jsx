import React, { useState, useRef, useEffect } from "react";

export const Profile = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const profileRef = useRef(null);

  // Toggle menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={profileRef}>
      {/* Profile Image */}
      <button onClick={toggleMenu} className="w-12 h-12 rounded-full border-2 border-white overflow-hidden">
        <img
          src="https://avatar.iran.liara.run/public"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </button>

      {/* Logout Button Dropdown */}
      {menuOpen && (
        <div className="absolute right-0 mt-2 w-36 bg-white shadow-lg rounded-lg py-2 text-center transition-all">
          <button
            className="w-full text-red-600 hover:bg-red-100 px-4 py-2 rounded-md font-semibold"
            onClick={() => alert("Logged out!")} 
          >
            🚪 Logout
          </button>
        </div>
      )}
    </div>
  );
};
