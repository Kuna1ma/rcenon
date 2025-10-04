import React from "react";
import { motion } from "framer-motion";
import HowWeWork from "../components/Home/HowWeWork";
import TechStack from "../components/Home/TechStack";
import WhatIOffer from "../components/Home/WhatIOffer";
import WhyHireMe from "../components/Home/WhyHireMe";
import IntroSection from "../components/Home/IntroSection";
import { FaPython, FaJava, FaPhp, FaLaravel, FaReact, FaNodeJs, FaDatabase, FaServer, FaCuttlefish, FaRobot, FaWrench, FaMicrosoft, FaWordpress, FaLaptopCode } from "react-icons/fa";

export default function Home() {
  const skills = {
    languages: [
      { icon: <FaPython className="text-yellow-300" />, name: "Python", level: 85 },
      { icon: <FaJava className="text-orange-500" />, name: "Java", level: 80 },
      { icon: <FaPhp className="text-indigo-400" />, name: "PHP", level: 60 },
      { icon: <FaCuttlefish className="text-blue-400" />, name: "C++", level: 80 },
    ],
    frameworks: [
      { icon: <FaLaravel className="text-red-500" />, name: "Laravel (MVC)", level: 85 },
      { icon: <FaReact className="text-cyan-400" />, name: "MERN Stack", level: 88 },
    ],
    backend: [
      { icon: <FaServer className="text-emerald-400" />, name: "Backend Architecture", level: 90 },
      { icon: <FaNodeJs className="text-green-500" />, name: "API Development", level: 85 },
      { icon: <FaDatabase className="text-emerald-500" />, name: "Databases (SQL / NoSQL)", level: 80 },
    ],
  };

  const offerings = [
    { icon: <FaLaptopCode className="text-blue-400" />, title: "Web Development", desc: "I build responsive, fast, and SEO-optimized websites." },
    { icon: <FaWordpress className="text-indigo-400" />, title: "WordPress Development", desc: "Custom themes, plugins, and full optimization for speed." },
    { icon: <FaReact className="text-cyan-400" />, title: "Custom MERN / Laravel Systems", desc: "End-to-end web apps, dashboards, APIs, and authentication." },
    { icon: <FaRobot className="text-emerald-400" />, title: "AI Automation & Machine Learning", desc: "From WhatsApp auto replies to chatbots and AI workflows." },
    { icon: <FaWrench className="text-orange-400" />, title: "PC Building, Repair & Optimization", desc: "Custom builds, diagnostics, and performance tuning." },
    { icon: <FaMicrosoft className="text-blue-500" />, title: "Microsoft & Excel Activation", desc: "Secure and legitimate activation with setup support." },
  ];

  return (
    <div id="home" className="relative w-full bg-white dark:bg-[#050505] dark:text-gray-100 transition-colors duration-700">
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="fixed top-0 left-0 w-full h-full object-cover z-0">
        <source src="video/home.mp4" type="video/mp4" />
      </video>

      {/* Overlay for dark mode */}
      {/* Overlay for light and dark mode */}
      <div className="absolute inset-0 z-[1] bg-white/60 dark:bg-black/70 transition-colors duration-700" />


      {/* Content */}
      <div className="relative z-[2] px-8 md:px-20 py-28 md:py-36 max-w-7xl mx-auto">
        {/* Intro section here (unchanged) */}
        <IntroSection />
        <TechStack skills={skills} />
        <WhatIOffer offerings={offerings} />
        <WhyHireMe />
        <HowWeWork />
      </div>
    </div>
  );
}
