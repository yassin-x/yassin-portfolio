import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 60 },
  { name: "JavaScript", level: 85 },
  { name: "React", level: 75 },
  { name: "Node.js", level: 50 },
];

export default function SkillProgress() {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
  }, []);

  return (
    <div className="flex items-center justify-center h-[90vh]">
      <div className="w-full rounded p-14 lg:w-1/2">
        <h2 className="mb-4 text-lg font-bold text-center">Skill Progress</h2>
        {skills.map((skill, index) => (
          <div key={index} className="mb-4">
            <span className="block text-sm font-medium">{skill.name}</span>
            <div className="relative w-full h-4 bg-[#481E14] rounded">
              <motion.div
                className="absolute h-full bg-[#F2613F] rounded"
                initial={{ width: 0 }} 
                animate={load ? { width: `${skill.level}%` } : { width: 0 }} 
                transition={{ duration: 1 }} 
              />
            </div>
            <span className="text-xs text-right">{skill.level}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}