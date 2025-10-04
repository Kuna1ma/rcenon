import React from "react";
import { motion } from "framer-motion";
import { FiSearch, FiClipboard, FiZap, FiTrendingUp } from "react-icons/fi";

const steps = [
  {
    icon: <FiSearch size={24} className="text-emerald-400" />,
    title: "Discovery",
    subtitle: "Understanding Your Vision",
    desc: "We dive deep into your business goals, target audience, and unique challenges to create a tailored strategy.",
    duration: "1–2 weeks",
    tagColor: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/40",
  },
  {
    icon: <FiClipboard size={24} className="text-purple-400" />,
    title: "Strategy",
    subtitle: "Crafting the Blueprint",
    desc: "We develop a comprehensive roadmap that aligns with your objectives and sets clear success metrics.",
    duration: "1–2 weeks",
    tagColor: "bg-purple-500/10 text-purple-400 border border-purple-500/40",
  },
  {
    icon: <FiZap size={24} className="text-amber-400" />,
    title: "Execution",
    subtitle: "Bringing Ideas to Life",
    desc: "Our expert team implements the strategy with precision, keeping you involved at every milestone.",
    duration: "4–8 weeks",
    tagColor: "bg-amber-500/10 text-amber-400 border border-amber-500/40",
  },
  {
    icon: <FiTrendingUp size={24} className="text-blue-400" />,
    title: "Results",
    subtitle: "Measuring Success",
    desc: "We deliver your project with comprehensive documentation and ongoing support to ensure lasting impact.",
    duration: "Ongoing",
    tagColor: "bg-blue-500/10 text-blue-400 border border-blue-500/40",
  },
];

export default function HowWeWork() {
  return (
    <section
      id="how-we-work"
      className="relative w-full py-24 bg-transparent text-gray-900 dark:text-gray-100"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* === Header === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 
            text-gray-900 dark:bg-gradient-to-r dark:from-blue-400 dark:to-cyan-400 
            dark:bg-clip-text dark:text-transparent transition-colors duration-500"
          >
            How We Work
          </h2>

          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            A proven process that transforms your vision into reality with
            precision and creativity.
          </p>
        </motion.div>

        {/* === Timeline === */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-[8rem] w-[2px] bg-gradient-to-b from-gray-300 dark:from-gray-700 to-transparent transform -translate-x-1/2"></div>


          <div className="space-y-20">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center md:items-start ${
                  i % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Connector dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-4 h-4 bg-cyan-500 rounded-full border-4 border-white dark:border-gray-900 shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
                </div>

                {/* Card */}
                <div
                  className={`w-full md:w-[46%] p-6 rounded-2xl border border-gray-200 dark:border-gray-800 
                  bg-white dark:bg-[#0d0d0d] hover:shadow-lg transition-all duration-300 ${
                    i % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {step.icon}
                      <h3 className="text-xl font-bold">{step.title}</h3>
                    </div>
                    <span
                      className={`text-sm px-3 py-1 rounded-full font-medium ${step.tagColor}`}
                    >
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    {step.subtitle}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* === Call to Action === */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mt-28"
            >
              <h3
                className="text-3xl md:text-4xl font-bold mb-4 
                text-gray-900 dark:bg-gradient-to-r dark:from-cyan-400 dark:to-blue-400 
                dark:bg-clip-text dark:text-transparent"
              >
                Ready to elevate your business?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-xl mx-auto">
                Let’s build something impactful together — from concept to
                completion, we’ll guide you every step of the way.
              </p>

              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-3 text-white font-semibold 
                  bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full 
                  shadow-md hover:shadow-xl transition-all duration-300"
              >
                Get in Touch
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
