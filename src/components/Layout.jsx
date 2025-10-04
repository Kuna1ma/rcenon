import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion, AnimatePresence } from "framer-motion";

const Layout = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

    // Listen for theme changes triggered from Navbar
    const handleThemeChange = (e) => setTheme(e.detail);
    window.addEventListener("theme-change", handleThemeChange);
    return () => window.removeEventListener("theme-change", handleThemeChange);
  }, [theme]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={theme}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.02 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`min-h-screen flex flex-col transition-colors duration-500 
          bg-white text-gray-900 dark:bg-[#050505] dark:text-gray-100`}
      >
        {/* Navbar stays at the top */}
        <Navbar theme={theme} />

        {/* Page content */}
        <main className="flex-grow">{children}</main>

        {/* Footer stays at the bottom */}
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default Layout;
