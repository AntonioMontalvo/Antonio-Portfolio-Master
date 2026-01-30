import React from "react";
import ProjectCard from "../components/ProjectCard";
import { projectsData } from "../data/projectsData";

const ProjectsPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
        Projects
      </h1>

      <div className="grid gap-10">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};
export default ProjectsPage;
