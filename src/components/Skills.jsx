import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faGit,
  faGithub,
  faBootstrap,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux, SiTypescript } from "react-icons/si";
import SkillsProgress from "./SkillProgress"
export default function Skills() {
  const skills = [
    { name: "HTML", icon: <FontAwesomeIcon icon={faHtml5} /> },
    { name: "CSS", icon: <FontAwesomeIcon icon={faCss3Alt} /> },
    { name: "JavaScript", icon: <FontAwesomeIcon icon={faJs} /> },
    { name: "Tailwind", icon: <RiTailwindCssFill /> },
    { name: "Bootstrap", icon: <FontAwesomeIcon icon={faBootstrap} /> },
    { name: "React JS", icon: <FontAwesomeIcon icon={faReact} /> },
    { name: "Redux", icon: <SiRedux /> },
    { name: "Redux Toolkit", icon: <SiRedux /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "NodeJS", icon: <FontAwesomeIcon icon={faNodeJs} /> },
    { name: "Git", icon: <FontAwesomeIcon icon={faGit} /> },
    { name: "GitHub", icon: <FontAwesomeIcon icon={faGithub} /> },
  ];

  return (
    <div>
      <div className="relative flex items-center justify-start w-full h-16 overflow-hidden rounded-lg">
        <motion.div
          className="flex"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            duration: 15,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center mx-12">
              {skill.icon}
              <span className="text-xs">{skill.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
      <SkillsProgress />
    </div>
  );
}
