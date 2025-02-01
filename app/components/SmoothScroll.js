"use client";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white shadow-md p-4 z-50">
      <nav className="flex justify-between items-center container mx-auto">
        <h1 className="text-2xl font-bold">My Logo</h1>
        <div className="space-x-4">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            About
          </Link>
          <Link
            to="portfolio"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            Portfolio
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            Skills
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
