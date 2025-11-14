// src/components/ProjectCard.tsx
import React from "react";

// Define the expected properties (props) for the component
interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  liveUrl: string; // Placeholder for the live demo link
  githubUrl: string; // Placeholder for the GitHub repository link
  isPlaceholder?: boolean; // Optional flag for placeholder status
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techStack,
  liveUrl,
  githubUrl,
  isPlaceholder = false,
}) => {
  return (
    <div
      className={`p-6 border rounded-xl shadow-lg transition-transform duration-300 hover:shadow-xl ${
        isPlaceholder
          ? "bg-gray-100 border-dashed border-gray-400"
          : "bg-white border-green-500"
      }`}
    >
      {/* Card Header and Title */}
      <h3
        className={`text-2xl font-bold mb-3 ${
          isPlaceholder ? "text-gray-600" : "text-green-700"
        }`}
      >
        {title}
        {isPlaceholder && (
          <span className="ml-2 text-sm font-medium text-red-500">(WIP)</span>
        )}
      </h3>

      {/* Description */}
      <p className="text-gray-700 mb-4 h-20 overflow-hidden">{description}</p>

      {/* Tech Stack */}
      <div className="mb-6 flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="text-xs font-semibold px-3 py-1 bg-gray-200 text-gray-800 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <a
          href={isPlaceholder ? "#" : liveUrl}
          target={isPlaceholder ? undefined : "_blank"}
          rel={isPlaceholder ? undefined : "noopener noreferrer"}
          className={`flex-1 text-center py-2 rounded-lg font-semibold transition-colors duration-200 
            ${
              isPlaceholder
                ? "bg-gray-300 text-gray-700 cursor-not-allowed pointer-events-none"
                : "bg-green-600 text-white hover:bg-green-700"
            }`}
          aria-disabled={isPlaceholder}
        >
          {isPlaceholder ? "Building..." : "Live Demo"}
        </a>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center py-2 rounded-lg font-semibold border border-gray-400 text-gray-800 hover:bg-gray-100"
        >
          Code (GitHub)
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
