"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import myImage from "../assets/Profile.jpg";
import Insta from "../assets/icons/instagram-icon.svg";
import XIcon from "../assets/icons/x-icon.svg";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton"; // Import Skeleton component

// برای دریافت اطلاعات از API
const About = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/about"); // درخواست به API
        const result = await res.json();
        console.log(result);

        setData(result);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section
      id="about"
      className="py-20 px-6 container mx-auto bg-gray-900 text-white relative"
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
            {/* Use Skeleton Loader for Image */}
            {data ? (
              <Image
                src={myImage}
                alt="Profile Picture"
                width={256}
                height={256}
                className="rounded-full object-cover relative shadow-md shadow-blue-600"
              />
            ) : (
              <Skeleton circle height={256} width={256} />
            )}
          </div>

          {/* Social Links */}
          <motion.div
            className="mt-6 flex space-x-4 bg-white/15 p-4 rounded-xl backdrop-blur-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <a href="https://github.com/Alirezamajidiyan" target="_blank">
              <FaGithub className="text-3xl text-gray-300 hover:text-white transition-colors" />
            </a>
            <a href="https://www.instagram.com/alireza_majidiyan1/" target="_blank">
              <Image src={Insta} width={30} />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank">
              <Image src={XIcon} width={30} />
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
            {/* Use Skeleton Loader for Text */}
            {data ? (
              <>
                I am a passionate web developer specializing in
                <span className="font-semibold text-blue-400">
                  {" "}
                  {data.skills.nextJs}
                </span>
                ,
                <span className="font-semibold text-blue-400">
                  {" "}
                  {data.skills.tailwind}
                </span>
                , and{" "}
                <span className="font-semibold text-blue-400">
                  {" "}
                  {data.skills.react}
                </span>
                <span className="font-semibold text-blue-400">
                  {" "}
                  {data.skills.MernStack}
                </span>
                . I love creating interactive & user-friendly applications.
              </>
            ) : (
              <Skeleton count={3} />
            )}
          </p>
          <a
            href="https://uploadkon.ir/uploads/edad01_25علیرضا-مجیدیان-1403-11-13.pdf"
            download
            className="relative inline-block px-8 py-3 font-bold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg overflow-hidden transition-all duration-500 transform hover:scale-110 hover:shadow-2xl"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-50 blur-lg"></span>
            <span className="relative z-10">Download CV</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
