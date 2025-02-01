"use client";
import { motion } from "framer-motion";

const Blog = () => {
  return (
    <section id="blog" className="py-20 container mx-auto text-center">
      <motion.h2
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Blog
      </motion.h2>
      <p className="text-lg text-gray-600">Coming soon...</p>
    </section>
  );
};

export default Blog;
