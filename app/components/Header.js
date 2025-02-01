"use client";
import { useState } from "react";
import { Link } from "react-scroll";
import { MdMenu, MdClose } from "react-icons/md"; // آیکون همبرگر و بستن منو
import { motion } from "framer-motion"; // برای انیمیشن‌ها

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-lg z-50">
      <nav className="flex justify-between items-center p-4 container mx-auto">
        <h1 className="text-2xl font-bold text-blue-400">My Logo</h1>

        {/* دکمه همبرگری برای موبایل */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {menuOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>

        {/* منوی نوار ناوبری (مخصوص دسکتاپ) */}
        <div className="hidden lg:flex space-x-6">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-400"
          >
            About
          </Link>
          <Link
            to="portfolio"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-400"
          >
            Portfolio
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-400"
          >
            Skills
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-400"
          >
            Contact
          </Link>
        </div>
      </nav>

      {/* منوی بازشونده برای موبایل */}
      {menuOpen && (
        <motion.div
          initial={{ y: "-100%" }} // منو در ابتدا از بالا خارج می‌شود
          animate={{ y: 0 }} // منو به موقعیت نهایی می‌آید
          exit={{ y: "-100%" }} // انیمیشن برای بسته شدن منو
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="lg:hidden bg-gray-800 p-4 space-y-4 absolute top-0 left-0 w-full"
        >
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="block text-center text-white hover:text-blue-400"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="portfolio"
            smooth={true}
            duration={500}
            className="block text-center text-white hover:text-blue-400"
            onClick={() => setMenuOpen(false)}
          >
            Portfolio
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="block text-center text-white hover:text-blue-400"
            onClick={() => setMenuOpen(false)}
          >
            Skills
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="block text-center text-white hover:text-blue-400"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
