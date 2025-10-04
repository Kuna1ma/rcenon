import React from "react";
import { motion } from "framer-motion";
import SkillGroup from "../Shared/SkillGroup";

export default function TechStack({ skills }) {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.section
      id="tech-stack"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="mt-24 mb-20"
    >
      {/* === Title === */}
      <motion.h2
        variants={fadeUp}
        custom={0}
        className="text-3xl md:text-4xl font-bold mb-10 text-left 
                   text-gray-900 dark:bg-gradient-to-r dark:from-blue-400 
                   dark:to-cyan-400 dark:bg-clip-text dark:text-transparent 
                   transition-colors duration-500"
      >
        Tech Stack & Expertise
      </motion.h2>

      {/* === Skill Groups === */}
      <div className="space-y-12">
        {[
          { title: "Programming Languages", data: skills.languages },
          { title: "Frameworks & Stacks", data: skills.frameworks },
          { title: "Backend & Databases", data: skills.backend },
        ].map((group, i) => (
          <motion.div key={i} variants={fadeUp} custom={i + 1}>
            <SkillGroup title={group.title} data={group.data} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
