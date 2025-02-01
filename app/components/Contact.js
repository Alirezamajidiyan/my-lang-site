"use client";
import { useState } from "react";
import { motion } from "framer-motion"; // For animation
import Skeleton from "react-loading-skeleton"; // For skeleton loader

const ContactMe = () => {
  const [loading, setLoading] = useState(false); // For loading state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Handle input change in the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Form validation
  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required.");
      return false;
    }

    // Check if the email is valid
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address.");
      return false;
    }

    return true;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Clear error before submitting

    // Validate the form before sending
    if (!validateForm()) {
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormSubmitted(true);
        setFormData({ name: "", email: "", message: "" }); // Clear form after successful submission
      } else {
        setError("An error occurred while sending your message.");
      }
    } catch (error) {
      setError("Error connecting to the server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 container mx-auto px-6 bg-gray-900 text-white"
    >
      {/* Title with animation */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center text-white mb-12 relative"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
        <span className="block w-16 h-1 bg-blue-500 mx-auto mt-2"></span>
      </motion.h2>

      <div className="max-w-lg mx-auto">
        {loading ? (
          <div className="space-y-6">
            <Skeleton height={50} />
            <Skeleton height={50} />
            <Skeleton height={150} />
            <Skeleton height={50} />
          </div>
        ) : formSubmitted ? (
          <motion.div
            className="text-center text-green-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Your message has been sent successfully!
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {/* Name Field */}
            <motion.div
              className="space-y-2"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <label htmlFor="name" className="block text-lg">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white"
                placeholder="Enter your name"
              />
            </motion.div>

            {/* Email Field */}
            <motion.div
              className="space-y-2"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <label htmlFor="email" className="block text-lg">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white"
                placeholder="Enter your email"
              />
            </motion.div>

            {/* Message Field */}
            <motion.div
              className="space-y-2"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="message" className="block text-lg">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white"
                rows="5"
                placeholder="Write your message"
              />
            </motion.div>

            {/* Error message */}
            {error && <div className="text-red-500 text-center">{error}</div>}

            <div className="text-center">
              <motion.button
                type="submit"
                className="px-8 py-2 bg-gradient-to-r from-blue-500 to-purple-600 font-semibold rounded-lg hover:bg-blue-400 transition-all"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                Send Message
              </motion.button>
            </div>
          </motion.form>
        )}
      </div>
    </section>
  );
};

export default ContactMe;
