import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const location = useLocation();

  // Handle scroll blur toggle
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Apply theme toggle
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  // Sidebar animation variants
  const sidebarVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
    exit: { x: "-100%", opacity: 0, transition: { duration: 0.3 } },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
  };

  return (
    <>
      {/* Top Navbar */}
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl
        flex items-center justify-between px-6 py-3 rounded-2xl border transition-all duration-300
        text-gray-900 dark:text-gray-100
        ${
          isScrolled
            ? "backdrop-blur-md bg-white/70 dark:bg-[#0d0d0d]/60 border-gray-300 dark:border-gray-800 shadow-md"
            : "bg-transparent border-transparent"
        }`}
      >
        {/* Logo */}
        <div className="font-extrabold text-xl tracking-widest text-gray-900 dark:text-gray-100">
          <Link to="/">Rexavier G. Cenon</Link>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-10 text-[0.95rem] tracking-wide font-semibold uppercase transition-colors duration-300">
          {[
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
            { name: "About", path: "/about" },
            { name: "Contact", path: "/contact" },
          ].map((item, i) => {
            const isActive =
              location.pathname === item.path ||
              (item.path === "/" && location.pathname === "");

            return (
              <li key={i}>
                <Link
                  to={item.path}
                  className={`relative group transition-all duration-300 ${
                    isActive
                      ? "text-blue-600 dark:text-cyan-400"
                      : "text-gray-800 dark:text-gray-100 hover:text-blue-500 dark:hover:text-cyan-400"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] rounded-full transition-all duration-300 ${
                      isActive
                        ? "w-full bg-blue-600 dark:bg-cyan-400"
                        : "w-0 group-hover:w-full bg-blue-500 dark:bg-cyan-400"
                    }`}
                  ></span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right Side Controls */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            whileTap={{ scale: 0.8, rotate: 15 }}
            className="p-2 rounded-full border border-white/20 hover:border-blue-400 hover:text-blue-400 transition"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-center"
              >
                {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
              </motion.span>
            </AnimatePresence>
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setNavOpen(true)}
            className="md:hidden text-2xl"
          >
            <FiMenu />
          </button>
        </div>
      </nav>

      {/* Sidebar Drawer */}
      <AnimatePresence>
        {navOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setNavOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              variants={sidebarVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 left-0 h-full w-[80%] max-w-xs 
              bg-white/90 dark:bg-[#0d0d0d]/90 backdrop-blur-2xl border-r border-gray-300 dark:border-gray-800 shadow-2xl 
              text-gray-900 dark:text-gray-100 z-50 rounded-r-2xl"
            >
              <div className="flex justify-between items-center px-5 py-5 border-b border-gray-300 dark:border-gray-800">
                <h2 className="text-lg font-semibold tracking-wide">Menu</h2>
                <button
                  onClick={() => setNavOpen(false)}
                  className="text-2xl hover:text-blue-400"
                >
                  <FiX />
                </button>
              </div>

              <ul className="flex flex-col gap-6 px-6 py-8 text-lg font-semibold uppercase tracking-wide">
                {[
                  { name: "Home", path: "/" },
                  { name: "Projects", path: "/projects" },
                  { name: "About", path: "/about" },
                  { name: "Contact", path: "/contact" },
                ].map((item, i) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <motion.li
                      key={item.name}
                      custom={i}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                    >
                      <Link
                        to={item.path}
                        className={`block transition ${
                          isActive
                            ? "text-blue-600 dark:text-cyan-400"
                            : "hover:text-blue-400"
                        }`}
                        onClick={() => setNavOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              <div className="mt-auto px-6 pb-10">
                <Link
                  to="/contact"
                  className="block w-full text-center bg-blue-600 hover:bg-blue-700 
                  text-white font-semibold py-3 rounded-lg shadow-md transition-all duration-300"
                  onClick={() => setNavOpen(false)}
                >
                  Let’s Work Together
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
