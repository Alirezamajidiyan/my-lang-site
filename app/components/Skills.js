"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton"; // برای اسکلِتُن

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // متغیر برای تعیین بارگذاری داده‌ها

  // دریافت مهارت‌ها از API
  useEffect(() => {
    const fetchSkillsData = async () => {
      try {
        const response = await fetch("/api/skills");
        if (response.ok) {
          const data = await response.json();
          setSkills(data.skills);
          setIsLoading(false); // پس از دریافت داده‌ها، وضعیت بارگذاری را غیرفعال می‌کنیم
        } else {
          console.error("Error fetching data from the API.");
        }
      } catch (error) {
        console.error("Error fetching skills data:", error);
      }
    };

    fetchSkillsData();
  }, []);

  return (
    <section
      id="skills"
      className="py-20 container mx-auto text-center bg-gray-900"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center text-white mb-12 relative"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        My Skills
        <span className="block w-16 h-1 bg-blue-500 mx-auto mt-2"></span>
      </motion.h2>

      <motion.div
        className="flex flex-wrap justify-center gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {isLoading
          ? // در حالت بارگذاری از اسکلِتُن استفاده می‌کنیم
            [...Array(3)].map((_, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg w-40 text-white"
              >
                <Skeleton circle={true} height={64} width={64} />
                <Skeleton count={1} height={20} width={120} className="mt-4" />
                <Skeleton count={3} height={12} className="mt-2" />
                <Skeleton height={8} width="60%" className="mt-4" />
              </motion.div>
            ))
          : // نمایش مهارت‌ها زمانی که داده‌ها بارگذاری شده‌اند
            skills.map((skill) => (
              <motion.div
                key={skill.id}
                className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg w-40 text-white"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* آیکون مهارت */}
                <div className="w-16 h-16 mb-4">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-full h-full object-contain"
                    loading="lazy" // لیزی لودینگ
                  />
                </div>

                {/* نام مهارت */}
                <h3 className="text-xl font-semibold">{skill.name}</h3>

                {/* توضیحات مهارت */}
                <p
                  className="text-sm text-gray-400 mt-2"
                  style={{ minHeight: "60px" }}
                >
                  {skill.description}
                </p>

                {/* نوار پیشرفت */}
                <div className="w-full mt-4">
                  <motion.div
                    className="bg-gray-600 rounded-full h-2"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.progress}%` }}
                    transition={{ duration: 1 }}
                  >
                    <div className="h-2 bg-blue-500 rounded-full"></div>
                  </motion.div>
                </div>

                {/* درصد پیشرفت */}
                <p className="mt-2 text-sm text-gray-400">{skill.progress}%</p>
              </motion.div>
            ))}
      </motion.div>
    </section>
  );
};

export default Skills;
