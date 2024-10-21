import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight, FiHome } from "react-icons/fi";
import { MdContacts, MdWorkHistory, MdInfo } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <aside
        className={`fixed left-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center transition-all duration-300 z-50`}
      >
        <div>
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className={`fixed left-0 top-1/2 transform -translate-y-1/2 flex ${
              isOpen ? "w-48" : "w-16"
            } items-center justify-center transition-all duration-300 text-white`}
          >
            {isOpen ? (
              <FiChevronLeft size={24} />
            ) : (
              <FiChevronRight size={24} />
            )}
          </button>
        </div>
        <div
          className={`fixed left-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center bg-[#481E14] w-16 h-[25rem] rounded-r-lg transition-all duration-300 ${
            isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
          }`}
        >
          <div className="grid grid-cols-1 gap-16 p-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex justify-center items-center w-16 h-12 transition-all duration-300 group ${
                    isActive ? "bg-[#0C0C0C] text-white rounded-l-lg" : ""
                  }`
                }
              >
                <FiHome />
                <span className="opacity-0 transition-opacity duration-300 text-white bg-[#481E14] p-1 m-1 rounded-md absolute left-[55px]  group-hover:opacity-100 group-hover:!block">
                  Home
                </span>
              </NavLink>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  `flex justify-center items-center w-16 h-12 transition-all duration-300 group ${
                    isActive ? "bg-[#0C0C0C] text-white rounded-l-lg" : ""
                  }`
                }
              >
                <MdInfo />
                <span className="opacity-0 transition-opacity duration-300 text-white bg-[#481E14] p-1 m-1 rounded-md absolute left-[55px]  group-hover:opacity-100 group-hover:!block">
                  Profile
                </span>
              </NavLink>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <NavLink
                to="/workspace"
                className={({ isActive }) =>
                  `flex justify-center items-center w-16 h-12 transition-all duration-300 group ${
                    isActive ? "bg-[#0C0C0C] text-white rounded-l-lg" : ""
                  }`
                }
              >
                <MdWorkHistory />
                <span className="opacity-0 transition-opacity duration-300 text-white bg-[#481E14] p-1 m-1 rounded-md absolute left-[55px]  group-hover:opacity-100 group-hover:!block">
                  Workspace
                </span>
              </NavLink>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `flex justify-center items-center w-16 h-12 transition-all duration-300 group ${
                    isActive ? "bg-[#0C0C0C] text-white rounded-l-lg" : ""
                  }`
                }
              >
                <MdContacts />
                <span className="opacity-0 transition-opacity duration-300 text-white bg-[#481E14] p-1 m-1 rounded-md absolute left-[55px]  group-hover:opacity-100 group-hover:!block">
                  Contacts
                </span>
              </NavLink>
            </motion.div>
          </div>
        </div>
      </aside>
    </div>
  );
}
