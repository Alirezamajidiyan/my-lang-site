"use client";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <h1 className="text-2xl font-bold text-white">در حال بارگذاری...</h1>
        <motion.div
          className="mt-4 w-12 h-12 border-4 border-t-4 border-yellow-400 rounded-full"
          animate={{ rotate: 360 }}
          transition={{
            loop: Infinity,
            ease: "linear",
            duration: 1,
          }}
        ></motion.div>
      </motion.div>
    </div>
  );
}
