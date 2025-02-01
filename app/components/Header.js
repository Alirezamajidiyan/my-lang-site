"use client";
import { useState } from "react";
import { Link } from "react-scroll";
import { MdMenu, MdClose } from "react-icons/md";
import { motion } from "framer-motion";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-lg z-50 backdrop-blur-lg">
      <nav className="flex justify-between items-center p-4 container mx-auto">
        <h1 className="text-2xl font-bold text-blue-400">Alireza Majidian</h1>

        {/* دکمه همبرگری برای موبایل */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-2xl focus:outline-none">
            {menuOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>

        {/* منوی نوار ناوبری (مخصوص دسکتاپ) */}
        <div className="hidden lg:flex space-x-6">
          {["about", "portfolio", "skills", "contact"].map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={500}
              className="cursor-pointer p-3 text-lg transition duration-300 hover:text-blue-400 hover:bg-white rounded-lg"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </div>
      </nav>

      {/* منوی بازشونده برای موبایل */}
      <motion.div
        initial={{ y: "-100%" }}
        animate={menuOpen ? { y: 0 } : { y: "-100%" }}
        exit={{ y: "-100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`lg:hidden bg-gray-800 p-6 space-y-4 absolute top-0 left-0 w-full transition-all duration-500 ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        {["about", "portfolio", "skills", "contact"].map((item) => (
          <Link
            key={item}
            to={item}
            smooth={true}
            duration={500}
            className="block text-center text-white py-2 text-lg transition duration-300 hover:text-blue-400"
            onClick={() => setMenuOpen(false)}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </Link>
        ))}
      </motion.div>
    </header>
  );
};

export default Header;
