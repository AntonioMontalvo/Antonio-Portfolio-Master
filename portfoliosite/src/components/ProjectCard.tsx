// portfoliosite/src/components/ProjectCard.tsx

import React from "react";
import { IProject } from "../types";

interface ProjectCardProps {
  project: IProject;
}

const StatusBadge: React.FC<{ status: IProject["status"] }> = ({ status }) => {
  let colorClasses = "bg-gray-200 text-gray-800";
  if (status === "Complete") {
    colorClasses = "bg-green-100 text-green-700";
  } else if (status === "In Progress" || status === "95% Complete") {
    colorClasses = "bg-yellow-100 text-yellow-700";
  }

  return (
    <span
      className={`px-3 py-1 text-xs font-semibold rounded-full ${colorClasses}`}
    >
      {status}
    </span>
  );
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-100">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
        <StatusBadge status={project.status} />
      </div>

      <p className="text-sm font-medium text-indigo-600 mb-4">
        {project.techStack}
      </p>

      <p className="text-gray-700 mb-5 leading-relaxed">{project.narrative}</p>

      <div className="flex space-x-4 pt-3 border-t border-gray-200">
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg transition shadow-md"
          >
            Live Demo
          </a>
        )}
        {project.codeLink && (
          <a
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-800 border border-indigo-600 hover:border-indigo-800 px-4 py-2 rounded-lg transition"
          >
            View Code
          </a>
        )}
        {!project.liveLink && !project.codeLink && (
          <span className="text-sm text-gray-500 py-2">
            Code Repo Coming Soon
          </span>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
