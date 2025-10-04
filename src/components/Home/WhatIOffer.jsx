import React from "react";
import { motion } from "framer-motion";

export default function WhatIOffer({ offerings }) {
  return (
    <motion.section
      id="what-i-offer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="mt-20 mb-28"
    >
      {/* === Section Title === */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-10 text-left 
                   text-gray-900 dark:bg-gradient-to-r dark:from-blue-400 
                   dark:to-cyan-400 dark:bg-clip-text dark:text-transparent 
                   transition-colors duration-500"
      >
        What I Offer
      </motion.h2>

      {/* === Offer Cards === */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {offerings.map((offer, index) => (
          <div
            key={index}
            className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 
                       bg-gray-50 dark:bg-[#0d0d0d] hover:shadow-lg 
                       transition-all duration-300"
          >
            {/* Icon */}
            <div className="text-5xl mb-4 text-gray-900 dark:text-gray-100">
              {offer.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">
              {offer.title}
            </h3>

            {/* Description */}
            <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              {offer.desc}
            </p>
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
}
