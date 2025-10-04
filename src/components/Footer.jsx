import React from "react";
import {
  FaGithub,
  FaFacebookF,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t border-gray-300 dark:border-gray-800 
                 bg-gray-100/80 dark:bg-[#050505]/70 backdrop-blur-sm
                 text-gray-800 dark:text-gray-300 transition-colors duration-500"
    >
      {/* === Main Content === */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* --- About Section --- */}
        <div>
          <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">
            Rexavier Cenon
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-400 leading-relaxed">
            Full-stack developer dedicated to creating fast, modern, and
            scalable web applications that help businesses grow and stand out.
          </p>
        </div>

        {/* --- Quick Links --- */}
        <div>
          <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            {["Home", "Projects", "About", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="relative group hover:text-cyan-400 transition-colors"
                >
                  {item}
                  <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* --- Contact & Socials --- */}
        <div>
          <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">
            Connect
          </h3>

          {/* Contact Info */}
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-400 mb-4">
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-cyan-400" />
              <a
                href="mailto:gaculacenon@icloud.com"
                className="hover:text-cyan-400 transition-colors"
              >
                gaculacenon@icloud.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-cyan-400" />
              <a
                href="tel:+639910487896"
                className="hover:text-cyan-400 transition-colors"
              >
                +63 991 048 7896
              </a>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-5 text-lg">
            {[
              {
                icon: <FaGithub />,
                link: "https://github.com/Kuna1ma",
              },
              {
                icon: <FaFacebookF />,
                link: "https://facebook.com/rexavier.cenon",
              },
              {
                icon: <FaLinkedinIn />,
                link: "https://www.linkedin.com/in/rexavier-cenon-69b58921a/",
              },
            ].map((social, i) => (
              <a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-gray-300 dark:border-gray-700 
                           hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* === Bottom Bar === */}
      <div className="border-t border-gray-300 dark:border-gray-800 py-5 text-center text-sm text-gray-600 dark:text-gray-400">
        © {currentYear} Rexavier Cenon. All rights reserved.
      </div>
    </footer>
  );
}
