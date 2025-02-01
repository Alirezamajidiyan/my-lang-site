"use client";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-20 container mx-auto text-center">
      <motion.h2
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Me
      </motion.h2>
      <p className="mb-4">Feel free to reach out to me!</p>
      <a
        href="mailto:your-email@example.com"
        className="bg-blue-500 text-white px-6 py-3 rounded-lg"
      >
        Email Me
      </a>
    </section>
  );
};

export default Contact;
