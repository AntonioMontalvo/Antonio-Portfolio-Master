// portfoliosite/src/data/projectsData.ts

import type { IProject } from "../types.js";

// Define the data for all six projects
export const projectsData: IProject[] = [
  {
    id: 1,
    title: "Project 2: E-Commerce MERN Stack App",
    techStack:
      "React, Node.js, Express, MongoDB, TypeScript, Tailwind CSS, Zustand, JWT Auth",
    narrative:
      "A complex, full-stack e-commerce platform demonstrating secure authentication, admin controls (RBAC), multi-step checkout, and robust server-side order management. **Showcases OOP principles translated into clean, scalable Node.js architecture.**",
    status: "95% Complete",
    liveLink: "http://localhost:5174", // Placeholder: Change to deployed URL
    codeLink: "https://github.com/yourusername/ecommerce-app", // Placeholder
  },
  {
    id: 2,
    title: "Project 3: Robotics Data Visualization Dashboard",
    techStack: "Full-Stack Python (Flask), Pandas, React, Chart.js, CORS",
    narrative:
      "A dual-stack application where the **Python/Flask back-end** processes complex sensor data (using Pandas) and serves it to a React front-end for visualization. **Highlights proficiency in Python data handling and API development.**",
    status: "Complete",
    liveLink: "http://localhost:5173", // Placeholder: Change to deployed URL
    codeLink: "https://github.com/yourusername/data-viz-app", // Placeholder
  },
  {
    id: 3,
    title: "Project 4: C++ Performance Utility",
    techStack: "C++ (Standard Library), Console Application, CMake",
    narrative:
      "A targeted utility (e.g., custom file processor or recursive math solver) designed to run resource-intensive calculations. **The purpose is to contrast the raw speed and memory control of C++ with the flexibility of JavaScript.**",
    status: "Planned",
    liveLink: null,
    codeLink: "https://github.com/yourusername/cpp-demo", // Placeholder
  },
  {
    id: 4,
    title: "Project 5: Asynchronous Flexibility Demo",
    techStack: "Node.js, TypeScript, REST API Consumption",
    narrative:
      "A demonstration using Node.js to quickly manage concurrent asynchronous operations (e.g., fetching data from multiple external APIs simultaneously). **Used to discuss rapid prototyping and the non-blocking nature of JavaScript vs. C++.**",
    status: "Planned",
    liveLink: null,
    codeLink: "https://github.com/yourusername/async-demo", // Placeholder
  },
  {
    id: 5,
    title: "Project 6: Python File Automation Script",
    techStack: "Python (Standard Library), Pandas",
    narrative:
      "A command-line tool that automates a real-world task (e.g., filtering large log files or converting data formats). **Showcases Python's power in scripting, utility, and automation for quick, practical solutions.**",
    status: "Complete",
    liveLink: null,
    codeLink: "https://github.com/yourusername/python-automation", // Placeholder
  },
  {
    id: 6,
    title: "Project 1: The Portfolio Site (The Shell)",
    techStack: "React, React Router, Tailwind CSS, TypeScript",
    narrative:
      "The professional front-end that ties the entire story together. **Designed for optimal readability and mobile responsiveness, demonstrating best practices in modern front-end structure.**",
    status: "In Progress",
    liveLink: null,
    codeLink: "https://github.com/yourusername/portfolio-site", // Placeholder
  },
];
