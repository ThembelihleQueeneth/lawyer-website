// src/components/Navbar.tsx
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-6 bg-black text-white">
      {/* Logo */}
      <div className="text-2xl font-bold tracking-wide">
        Attorney<span className="text-yellow-500">Firm</span>
      </div>

      {/* Nav Links */}
      <ul className="flex space-x-8 text-lg font-medium">
        <li className="hover:text-yellow-500 cursor-pointer transition">Why Us</li>
        <li className="hover:text-yellow-500 cursor-pointer transition">Services</li>
        <li className="hover:text-yellow-500 cursor-pointer transition">Testimonial</li>
        <li className="hover:text-yellow-500 cursor-pointer transition">Team</li>
        <li className="hover:text-yellow-500 cursor-pointer transition">Contact Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
