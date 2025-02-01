"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import myImage from "../assets/Profile.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 container mx-auto bg-gray-900 text-white"
    >
      {/* Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center mb-12 relative"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        About Me
        <span className="block w-16 h-1 bg-blue-500 mx-auto mt-2"></span>
      </motion.h2>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div
          className="relative flex flex-col items-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Profile Image with Neon Border */}
          <div className="relative w-52 h-52 md:w-64 md:h-64">
            <div className="absolute inset-0 rounded-full border-[6px] border-blue-500 animate-pulse"></div>
            <Image
              src={myImage}
              alt="Profile Picture"
              width={256}
              height={256}
              className="rounded-full object-cover relative shadow-md shadow-blue-600"
            />
          </div>

          {/* Social Links */}
          <motion.div
            className="mt-6 flex space-x-4 bg-white/10 p-4 rounded-xl backdrop-blur-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <a href="https://github.com/yourusername" target="_blank">
              <FaGithub className="text-3xl text-gray-300 hover:text-white transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/yourusername" target="_blank">
              <FaLinkedin className="text-3xl text-blue-500 hover:text-blue-400 transition-colors" />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank">
              <FaTwitter className="text-3xl text-blue-400 hover:text-blue-300 transition-colors" />
            </a>
          </motion.div>
        </motion.div>
        {/* Text Section */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg leading-relaxed">
            I am a passionate web developer specializing in
            <span className="font-semibold text-blue-400"> Next.js</span>,
            <span className="font-semibold text-blue-400"> Tailwind CSS</span>,
            and <span className="font-semibold text-blue-400"> React</span>. I
            love creating interactive & user-friendly applications.
          </p>
          <a
            href="/path/to/your-cv.pdf"
            download
            className="relative inline-block px-8 py-3 font-bold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg overflow-hidden transition-all duration-500 transform hover:scale-110 hover:shadow-2xl"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-50 blur-lg"></span>
            <span className="relative z-10">Download CV</span>
          </a>
        </motion.div>

        {/* Profile Picture & Socials */}
      </div>
    </section>
  );
};

export default About;
