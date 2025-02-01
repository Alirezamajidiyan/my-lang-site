"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton"; // Import Skeleton

// Portfolio Component
const Portfolio = () => {
  const [projects, setProjects] = useState([]); // پروژه‌ها
  const [categories, setCategories] = useState([]); // دسته‌بندی‌ها
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true); // Loading state for skeleton

  // بارگذاری پروژه‌ها و دسته‌بندی‌ها از API
  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        const response = await fetch("/api/portfolio"); // مسیر API خود را وارد کنید
        const data = await response.json();
        setProjects(data.projects); // داده‌های پروژه‌ها
        setCategories(data.categories); // داده‌های دسته‌بندی‌ها
        setLoading(false); // پس از بارگذاری، لودینگ را به false تغییر می‌دهیم
      } catch (error) {
        console.error("Error fetching portfolio data:", error);
        setLoading(false); // حتی در صورت بروز خطا، لودینگ را به false تغییر می‌دهیم تا صفحه بارگذاری نشود
      }
    };

    fetchPortfolioData();
  }, []);

  // فیلتر کردن پروژه‌ها بر اساس دسته‌بندی
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) =>
          project.categories.includes(selectedCategory)
        );

  return (
    <section
      id="portfolio"
      className="py-20 container mx-auto px-6 bg-gray-900"
    >
      {/* عنوان با افکت */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center text-white mb-12 relative"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Portfolio
        <span className="block w-16 h-1 bg-blue-500 mx-auto mt-4"></span>
      </motion.h2>

      {/* فیلتر دسته‌بندی */}
      <div className="flex justify-center space-x-4 mb-8">
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => setSelectedCategory(category.name)}
            className={`px-6 py-2 rounded-lg text-lg font-semibold transition-all ${
              selectedCategory === category.name
                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gradient-to-r from-blue-500 to-purple-600 hover:text-white"
            }`}
          >
            {/* Category Icon */}
            {category.name === "All" ? (
              <></>
            ) : (
              <Image
                src={category.icon}
                alt={category.name}
                width={20}
                height={20}
                className="inline-block mr-2"
              />
            )}
            {category.name}
          </button>
        ))}
      </div>

      {/* نمایش پروژه‌ها */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading
          ? // لیزی لودینگ برای تصاویر و جزئیات پروژه‌ها
            Array(filteredProjects.length) // تعداد لودینگ را به تعداد پروژه‌ها برابر می‌کنیم
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="relative bg-gray-800 rounded-xl overflow-hidden shadow-lg group"
                >
                  <Skeleton height={200} />
                  <div className="p-6 text-center">
                    <Skeleton width={150} height={24} />
                    <Skeleton count={3} />
                  </div>
                </div>
              ))
          : filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="relative bg-gray-800 rounded-xl overflow-hidden shadow-lg group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* تصویر پروژه */}
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {/* افکت نئونی روی عکس */}
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-opacity"></div>
                </div>

                {/* جزئیات پروژه */}
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400">{project.description}</p>
                </div>

                <div className="absolute inset-x-0 bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </div>
              </motion.div>
            ))}
      </div>
    </section>
  );
};

export default Portfolio;
