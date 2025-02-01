"use client";
import { motion } from "framer-motion";

const About = () => {
  console.log("Rendering About Section...");

  return (
    <section id="about" className="py-20 container mx-auto">
      <motion.h2
        className="text-3xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>
      <motion.p
        className="text-lg text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        I am a passionate developer skilled in Next.js, Tailwind, and more!
      </motion.p>
    </section>
  );
};

export default About;
