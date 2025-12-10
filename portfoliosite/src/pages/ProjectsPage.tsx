import React from "react";
import ProjectCard from "../components/ProjectCard";
import { projectsData } from "../data/projectsData";

const ProjectsPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
        Technical Project Showcase
      </h1>
      <p className="text-xl text-gray-600 mb-10 border-b pb-4">
        A portfolio designed around the core narrative: leveraging foundational
        knowledge (C++/OOP) to build clean, scalable systems in modern
        full-stack environments.
      </p>

      <div className="grid gap-10">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};
export default ProjectsPage;
