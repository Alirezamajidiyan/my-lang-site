"use client";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 container mx-auto">
      <motion.h2
        className="text-3xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Portfolio
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Example Projects */}
        <motion.div
          className="p-4 border rounded-lg"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-xl font-semibold">Project 1</h3>
          <p>Short description of project.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
