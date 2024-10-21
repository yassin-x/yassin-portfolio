import React from "react";
import logo from "../assets/me.jpg";
import { FaWhatsapp, FaDiscord, FaFacebook } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="flex flex-col justify-between p-4 text-white md:flex-row">

      <div className="flex flex-col items-start mb-4 md:mb-0">
        <img src={logo} alt="Logo" className="w-32 mb-2 rounded" />
        <p>Contact Info</p>
        <p>Email: yassin.ibrahim.hamed@gmail.com</p>
        <p>Phone Number: 01096492845</p>
        <div className="flex mt-2 space-x-4">
          <a
            href="https://wa.me/+201096492845"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 transition duration-300 border-2 border-white rounded-full hover:border-green-500 hover:bg-green-500"
          >
            <FaWhatsapp className="text-2xl" />
          </a>

          <a
            href="https://discord.com/users/526025530827603978"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 transition duration-300 border-2 border-white rounded-full hover:border-blue-600 hover:bg-blue-600"
          >
            <FaDiscord className="text-2xl" />
          </a>

          <a
            href="https://www.facebook.com/yassen.ibrahim.hamed"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 transition duration-300 border-2 border-white rounded-full hover:border-blue-800 hover:bg-blue-800"
          >
            <FaFacebook className="text-2xl" />
          </a>
        </div>
      </div>

      <div className="flex flex-col items-start mb-4 md:mb-0">
        <h3 className="mb-6 text-lg font-bold">Pages</h3>
        <NavLink to="/" className="text-[#9B3922] hover:underline mb-4">
          Home
        </NavLink>
        <NavLink to="/profile" className="text-[#9B3922] hover:underline mb-4">
          Profile
        </NavLink>
        <NavLink to="/workspace" className="text-[#9B3922] hover:underline mb-4">
          Workspace
        </NavLink>
        <NavLink to="/contact" className="text-[#9B3922] hover:underline mb-4">
          Contact
        </NavLink>
      </div>

      <div className="flex flex-col items-start">
        <h3 className="mb-6 text-lg font-bold">More Links</h3>
        <NavLink to="/" className="text-[#9B3922] hover:underline mb-4">
          Soon...
        </NavLink>
        <NavLink to="/" className="text-[#9B3922] hover:underline mb-4">
          Soon...
        </NavLink>
      </div>
    </div>
  );
}