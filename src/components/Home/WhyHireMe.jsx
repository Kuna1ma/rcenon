import React from "react";
import { motion } from "framer-motion";

export default function WhyHireMe() {
  return (
    <motion.section
      id="why-hire-me"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="mt-20 mb-28"
    >
      {/* === Title === */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-10 text-left 
                   text-gray-900 dark:bg-gradient-to-r dark:from-blue-400 dark:to-cyan-400 
                   dark:bg-clip-text dark:text-transparent transition-colors duration-500"
      >
        Why Hire Me?
      </motion.h2>

      {/* === Content Card === */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="p-8 rounded-xl border border-gray-200 dark:border-gray-800 
                   bg-gray-50 dark:bg-[#0d0d0d] shadow-md"
      >
        <p className="text-lg md:text-xl leading-relaxed text-justify text-gray-700 dark:text-gray-300 mb-6">
          I don’t just code websites. I build solutions that make businesses faster, smarter,
          and easier to manage. My focus is on{" "}
          <span className="text-cyan-400 font-semibold">real results</span>:
          secure systems, optimized performance, and seamless user experience.
        </p>

        <p className="text-lg md:text-xl leading-relaxed text-justify text-gray-700 dark:text-gray-300 mb-6">
          Coding isn’t just work for me; it’s something I truly enjoy. It feels like a game
          where every challenge pushes me to create something better. I don’t stop until
          your website looks, feels, and performs exactly the way it should.
        </p>

        <ul className="mt-6 space-y-3 text-gray-700 dark:text-gray-300 text-md">
          <li>• Proven full-stack development using <b>MERN</b> and <b>Laravel</b></li>
          <li>• Focus on business logic, speed, and long-term maintainability</li>
          <li>• Hands-on experience in <b>automation</b>, <b>backend APIs</b>, and <b>database design</b></li>
          <li>• Strong sense of ownership. Every project is built like it’s my own</li>
          <li>• Reliable communication and transparent progress updates</li>
        </ul>
      </motion.div>
    </motion.section>
  );
}
