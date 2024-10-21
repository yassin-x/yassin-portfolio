import React from "react";
import { FaGithub } from "react-icons/fa";
import profileImage from "../assets/me.jpg";

export default function Profile() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0C0C0C] p-4">
      <div className="relative mb-4">
        <img
          src={profileImage}
          alt="Profile"
          className="h-32 rounded-full shadow-md"
        />
      </div>

      <h1 className="text-3xl font-bold text-white">Yassin Ibrahim</h1>
      <p className="text-[#9B3922] text-lg mt-1">Frontend Web Developer</p>

      <div className="flex mt-4 space-x-4">
        <a
          href="https://github.com/yassin-x"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#9B3922]"
        >
          <FaGithub size={24} />
        </a>
      </div>

      <div className="w-full max-w-md p-6 mt-6 rounded-lg shadow-lg bg-[#481E14]">
        <h1 className="mb-4 text-lg font-bold text-gray-400">About Me :</h1>
        <a
          target="_blank"
          href="https://discord.gg/UnvYdudGup"
          className="text-blue-400 hover:underline"
          rel="noopener noreferrer"
        >
          Discord Server
        </a>
      </div>
    </div>
  );
}
