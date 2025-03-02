import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Profile } from "./Profile.jsx";
import { FiMenu, FiX } from "react-icons/fi"; 

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="w-full h-20 bg-gray-900 flex items-center justify-between px-6 md:px-12 border-b-2 border-b-white">
      {/* Logo */}
      <h2 className="text-white font-bold text-3xl md:text-4xl">
        <span className="text-[#ffe01a]">Quick</span>Swap
      </h2>

      <div className="hidden md:flex space-x-8">
        {["Home", "Skills", "Contact", "OfferSkill","About"].map((link) => (
          <NavLink
            key={link}
            to={link === "Home" ? "/" : `/${link.toLowerCase()}`} // ✅ Fixed this
            className={({ isActive }) =>
              `text-white text-lg font-medium transition duration-300 ${
                isActive ? "text-yellow-400 underline" : "hover:text-yellow-400"
              }`
            }
          >
            {link}
          </NavLink>
        ))}
      </div>

      {/* Profile Section */}
      <div className="hidden md:block">
        <Profile />
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-white text-3xl" onClick={toggleMenu}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-gray-800 flex flex-col items-center py-4 space-y-4 md:hidden">
          {["Home", "Skills", "Contact","OfferSkill", "About"].map((link) => (
            <NavLink
              key={link}
              to={link === "Home" ? "/" : `/${link.toLowerCase()}`} 
              className="text-white text-lg font-medium hover:text-yellow-400"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </NavLink>
          ))}
          <Profile />
        </div>
      )}
    </nav>
  );
};
