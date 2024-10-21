import React, { useState, useEffect } from "react";
import logo from "../assets/me.jpg";
import { motion } from "framer-motion";

const fullText = "Yassin Ibrahim";
export default function InfoMe() {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      } else {
        clearInterval(interval);
      }
    }, 200);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="flex items-center justify-center h-screen p-20">
      <div className="grid items-center grid-cols-1 gap-10 md:grid-cols-2">
        <motion.div
          className="flex flex-col items-start"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl font-bold">{displayedText}</h1>
          <h2 className="text-xl text-gray-600">Frontend Developer</h2>
          <p className="mt-4 text-gray-700 ">
            I am a motivated and self-taught Frontend Web Developer with a
            passion for creating dynamic, responsive, and user-friendly
            websites. With a solid foundation in modern web technologies and a
            keen eye for design, I aim to provide seamless and engaging user
            experiences. Currently, I am pursuing my degree in Commerce while
            actively developing my skills and portfolio in web development.
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <img
              src={logo}
              alt="me"
              className="w-32 rounded-full shadow-xl transition-shadow duration-300 ease-in-out hover:shadow-[0_0_20px_#00ff51,0_0_40px_#00ff51,0_0_80px_#00ff51]"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
