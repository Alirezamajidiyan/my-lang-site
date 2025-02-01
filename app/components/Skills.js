"use client";
import { motion } from "framer-motion";

const skills = [
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Framer Motion",
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 container mx-auto text-center">
      <motion.h2
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h2>
      <motion.div
        className="flex flex-wrap justify-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="px-6 py-3 bg-gray-200 rounded-lg"
            whileHover={{ scale: 1.1 }}
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
