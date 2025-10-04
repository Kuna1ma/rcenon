import React from "react";
import { motion } from "framer-motion";

export default function IntroSection() {
  return (
    <motion.section
      id="intro"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col-reverse md:flex-row items-center md:items-start gap-8 md:gap-12 mb-20 px-6 sm:px-8 md:px-0 text-center md:text-left"
    >
      {/* === Left Text Section === */}
      <div className="flex-1">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 leading-tight transition-colors duration-500">
          <span className="text-gray-900 dark:text-gray-100">Hi, I'm </span>
          <span className="text-blue-700 dark:text-cyan-400">Rexavier Cenon</span>
        </h1>

        {/* Motto Section */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-base sm:text-lg md:text-2xl font-semibold leading-relaxed text-gray-800 dark:text-gray-200 mb-10 max-w-2xl mx-auto md:mx-0"
        >
          You already have a great business. Now it’s time to have a website that’s just as great as your service or product.
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
        {/* Primary Button */}
        <a
            href="#projects"
            className="font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-xl shadow-md w-full sm:w-auto text-center
            bg-blue-600 text-white hover:bg-blue-700 
            dark:bg-cyan-500 dark:text-gray-900 dark:hover:bg-cyan-400 
            transition-all duration-300"
        >
            View My Projects
        </a>

        {/* Secondary Button */}
        <a
            href="#contact"
            className="font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-xl border w-full sm:w-auto text-center
            border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white 
            dark:border-cyan-400 dark:text-cyan-400 dark:hover:bg-cyan-400 dark:hover:text-gray-900 
            transition-all duration-300"
        >
            Get In Touch
        </a>
        </div>

      </div>

      {/* === Right Circular Image === */}
      <div className="flex-1 flex justify-center md:justify-end mb-8 md:mb-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-blue-600 dark:border-cyan-400 shadow-lg"
        >
          <img
            src="/image/profile.jpg"
            alt="Rexavier Cenon"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
