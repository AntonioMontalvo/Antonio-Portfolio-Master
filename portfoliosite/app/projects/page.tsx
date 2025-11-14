// src/app/projects/page.tsx
import ProjectCard from "@/components/ProjectCard";
import React from "react";
import type { Metadata } from "next";

// Set metadata for the page
export const metadata: Metadata = {
  title: "Projects | Your Name",
  description:
    "Full-Stack MERN, API Integration, and Front-End projects showcasing modern development skills.",
};

// Define the data for your three core projects
const projectsData = [
  {
    title: "Project 2: Modular Full-Stack E-Commerce App",
    description:
      "A comprehensive MERN stack application demonstrating full CRUD functionality, API design (REST), user authentication, and advanced state management (Zustand) for scalable data flow.",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Zustand",
      "Tailwind CSS",
    ],
    liveUrl: "#", // Will be updated later
    githubUrl: "#", // Will be updated later
    isPlaceholder: true, // Mark as under construction
  },
  {
    title: "Project 3: API & Scripting Tool (Data Integration)",
    description:
      "An application demonstrating system integration by using Python for data acquisition/cleaning (requests, pandas) and Vanilla JavaScript for a clean front-end display (e.g., a local service map or weather data).",
    techStack: [
      "Python",
      "Pandas",
      "Vanilla JS",
      "External APIs (Maps/Weather)",
      "Performance Optimization",
    ],
    liveUrl: "#",
    githubUrl: "#",
    isPlaceholder: true,
  },
  {
    title: "Project 1: Developer Portfolio Site",
    description:
      "The professional hub built with modern Next.js 14 and TypeScript. Demonstrates mastery of foundational front-end tooling, responsiveness, and CI/CD via Vercel.",
    techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Vercel CI/CD"],
    liveUrl: "http://localhost:3000", // Link to your actual hosted site when ready
    githubUrl: "[YOUR GITHUB REPO URL]", // **UPDATE THIS** with the GitHub URL for Project 1
    isPlaceholder: false, // This one is built!
  },
];

const ProjectsPage: React.FC = () => {
  return (
    <div className="container mx-auto py-16 px-4 max-w-7xl">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4 border-b pb-2">
        Portfolio Showcase
      </h1>
      <p className="text-xl text-gray-600 mb-12">
        Three focused projects to demonstrate full-stack capabilities and strong
        analytical problem-solving derived from a background in Java and C++.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            {...project} // Spreads all properties to the card component
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
