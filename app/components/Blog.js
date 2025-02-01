"use client";
import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton"; // Import Skeleton

const Blog = () => {
  return (
    <section
      id="blog"
      className="py-20 container mx-auto text-center bg-gray-900"
    >
      {/* Title with animation */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center text-white mb-12 relative"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Blog me
        <span className="block w-16 h-1 bg-blue-500 mx-auto mt-4"></span>
      </motion.h2>

      {/* Skeleton loading */}
      <div className="space-y-6">
        <Skeleton height={30} width="80%" />
        <Skeleton height={20} width="60%" />
        <Skeleton height={20} width="70%" />
        <Skeleton height={20} width="50%" />
        <Skeleton height={300} />
      </div>

      {/* Placeholder text */}
      <motion.p
        className="text-lg text-gray-300 mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Coming soon...
      </motion.p>
    </section>
  );
};

export default Blog;
