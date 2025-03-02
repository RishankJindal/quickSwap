import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-6 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Logo */}
        <h2 className="text-xl font-bold">
          <span className="text-yellow-400">Quick</span>Swap
        </h2>

        {/* Social Icons */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-yellow-400 transition">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="hover:text-yellow-400 transition">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="hover:text-yellow-400 transition">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="hover:text-yellow-400 transition">
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm mt-4 md:mt-0 text-gray-400">
          © {new Date().getFullYear()} QuickSwap. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
