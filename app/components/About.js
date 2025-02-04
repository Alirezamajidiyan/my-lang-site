// app/about/page.js

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import myImage from "../assets/Profile.jpg"; // مسیر تصویر شما
import Insta from "../assets/icons/instagram-icon.svg";
import XIcon from "../assets/icons/x-icon.svg";
import Skeleton from "react-loading-skeleton"; // Skeleton برای لودینگ

// کامپوننت About به صورت استاتیک
const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 container mx-auto bg-gray-900 text-white relative"
    >
      {/* عنوان */}
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

      {/* Grid برای نمایش محتوای بخش About */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div
          className="relative flex flex-col items-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* تصویر پروفایل */}
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

          {/* لینک‌های اجتماعی */}
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
            <a href="https://www.instagram.com/yourusername" target="_blank">
              <Image src={Insta} width={30} />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank">
              <Image src={XIcon} width={30} />
            </a>
          </motion.div>
        </motion.div>

        {/* بخش متن درباره من */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg leading-relaxed">
            I am a passionate front-end developer with a strong focus on
            creating beautiful and functional web applications. I specialize in{" "}
            <span className="font-semibold text-blue-400">React</span>,{" "}
            <span className="font-semibold text-blue-400">Next.js</span>,{" "}
            <span className="font-semibold text-blue-400">Tailwind CSS</span>,
            and other modern web technologies. My goal is to build fast,
            scalable, and user-friendly websites that provide great user
            experiences. I enjoy turning complex problems into simple solutions
            while continuously learning and improving my skills.
          </p>
          <p className="text-lg leading-relaxed">
            As a developer, I believe in the power of teamwork and open
            communication. I love collaborating with designers, back-end
            developers, and stakeholders to create products that not only meet
            business needs but also delight users. In my spare time, I
            contribute to open-source projects and stay updated with the latest
            trends in web development.
          </p>
          <a
            href="https://yourresume.com"
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
