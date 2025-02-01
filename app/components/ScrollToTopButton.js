"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // چک کردن اسکرول صفحه و تنظیم visiblity دکمه
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        // نمایش دکمه وقتی که کاربر به پایین صفحه رفته باشد
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // حذف event listener هنگام unmount شدن کامپوننت
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // اسکرول به بالای صفحه
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 bg-blue-500 text-white p-4 rounded-full shadow-lg z-50 transform transition-all ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      aria-label="Scroll to top"
    >
      ↑
    </motion.button>
  );
};

export default ScrollToTopButton;
