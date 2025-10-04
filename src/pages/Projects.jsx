import React, { useState } from "react";
import { FiX, FiExternalLink } from "react-icons/fi";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Philippine Maids",
      description:
        "A modern cleaning service booking system built using the MERN stack, featuring real-time updates, admin dashboard, and cleaner assignment system.",
      details:
        "This project runs on a VPS using Hostinger. The backend is built with Express and MongoDB, secured with JWT authentication. It integrates Google Firebase for user login and authentication, and Nodemailer for email confirmations. Users can book cleaning services, upload proof of payment, and receive automated email confirmations once their booking is approved by the admin.",
      image: "/image/philippinemaids-cover.jpg",
      tech: ["React", "Express", "MongoDB", "Firebase", "Nodemailer"],
      live: "https://philippinemaids.ae",
      gallery: [
        "/image/philippinemaids1.jpg",
        "/image/philippinemaids2.jpg",
        "/image/philippinemaids3.jpg",
      ],
    },
    {
      title: "PhilCare Services",
      description:
        "Professional cleaning company website with a custom booking system, Gmail login, and admin panel integrated with Google Sheets using the Google API.",
      details:
        "PhilCare Services features a completely separate booking form from Philippine Maids. Users can log in using their Gmail through Firebase or register manually. Once a booking is submitted, it’s automatically saved in both the admin panel and Google Sheets through the Google API. The backend runs on a Hostinger VPS for stability and speed, while admins can track, approve, and manage bookings from a custom dashboard with full data synchronization between the server and Sheets.",
      image: "/image/philcare-cover.png",
      tech: ["React", "Express", "MongoDB", "Google API", "Firebase"],
      live: "https://philcareservices.com",
      gallery: [
        "/image/philcare1.webp",
        "/image/philcare2.webp",
        "/image/philcare3.webp",
      ],
    },
    {
      title: "PC Repair & Custom Build Gallery",
      description:
        "Collection of computer repair and build projects — upgrades, diagnostics, and full custom setups tailored for performance.",
      details:
        "This gallery showcases PC builds and repair work — from diagnostics and part replacements to custom gaming setups. Each project focuses on optimal cooling, balanced component selection, and efficient cable management. Every build was tested for stability and performance under realistic workloads.",
      image: "/image/pcbuild-cover.jpg",
      tech: ["Hardware", "Optimization", "Windows", "Diagnostics"],
      gallery: [
        "/image/pc1.jpg",
        "/image/pc2.jpg",
        "/image/pc3.jpg",
        "/image/pc4.jpg",
      ],
    },
    {
      title: "Programming Projects",
      description:
        "Selection of personal projects, experiments, and educational builds — includes AI automation, chat systems, and quiz platforms.",
      details:
        "This includes my AI-powered Filipino quiz game, Node.js chat app with WebSocket, and several automation scripts using Python. I experiment with different technologies such as machine learning models, API integrations, and real-time interaction systems to build practical and creative solutions.",
      image: "/image/code-cover.jpg",
      tech: ["MERN", "AI", "Socket.IO", "Laravel", "Python"],
      gallery: [
        "/image/code1.jpg",
        "/image/code2.jpg",
        "/image/code3.jpg",
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="relative w-full min-h-screen py-24 px-6 md:px-16 text-gray-900 dark:text-gray-100 transition-colors duration-700"
    >
      {/* === Background Video === */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="video/home.mp4" type="video/mp4" />
      </video>

      {/* === Overlay === */}
      <div className="absolute inset-0 z-[1] bg-white/60 dark:bg-black/70 transition-colors duration-700" />

      {/* === Main Content === */}
      <div className="relative z-[2] max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-12 text-center">
          My <span className="text-blue-600 dark:text-cyan-400">Projects</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-100/90 dark:bg-[#0d0d0d]/90 rounded-xl overflow-hidden shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-800 transition-all duration-500"
            >
              {/* Image */}
              <div
                className="relative cursor-pointer overflow-hidden"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="bg-white text-gray-900 px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition"
                  >
                    View Gallery
                  </button>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-blue-100 dark:bg-cyan-900/30 text-blue-700 dark:text-cyan-300 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-cyan-400 hover:underline"
                  >
                    <FiExternalLink /> View Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* === Gallery Modal === */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="relative max-w-5xl w-full bg-gray-100 dark:bg-[#0a0a0a] rounded-xl shadow-lg p-6 overflow-y-auto max-h-[90vh]">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-red-400 text-2xl transition"
            >
              <FiX />
            </button>

            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              {selectedProject.title}
            </h2>

            <p className="text-sm text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              {selectedProject.details}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {selectedProject.gallery.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Gallery ${i}`}
                  className="rounded-lg object-cover w-full h-48 border border-gray-200 dark:border-gray-700"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
