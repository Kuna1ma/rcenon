import React from "react";

export default function SkillGroup({ title, data }) {
  return (
    <div>
      {/* === Group Title (e.g., Programming Languages) === */}
      <h3 className="text-xl md:text-2xl font-bold mb-8 text-gray-900 dark:text-cyan-400 transition-colors duration-500">
        {title}
      </h3>

      {/* === Skill Cards === */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((skill, i) => (
          <div
            key={i}
            className="p-6 rounded-xl border border-gray-300 dark:border-gray-800 
                       bg-white dark:bg-[#0d0d0d] hover:shadow-lg hover:shadow-cyan-500/10
                       transition-all duration-300"
          >
            {/* Skill Icon */}
            <div className="text-6xl mb-4 text-gray-800 dark:text-gray-100">
              {skill.icon}
            </div>

            {/* Skill Name */}
            <h4 className="text-lg font-bold mb-3 text-gray-900 dark:text-gray-100 transition-colors duration-500">
              {skill.name}
            </h4>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 dark:bg-gray-800 h-3 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-gray-900 dark:bg-gradient-to-r dark:from-blue-500 dark:to-cyan-400 transition-all duration-700"
                style={{
                  width: `${skill.level}%`,
                }}
              ></div>
            </div>

            {/* Percentage */}
            <p className="text-sm font-semibold mt-3 text-gray-800 dark:text-cyan-400 transition-colors duration-500">
              {skill.level}%
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
