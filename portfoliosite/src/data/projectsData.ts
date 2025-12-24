// portfoliosite/src/data/projectsData.ts

import { IProject } from "../types";

// The final data model for all seven portfolio projects
export const projectsData: IProject[] = [
  {
    id: 7,
    title: "Project 7: C++ Robotics Core (PID/OOP)",
    techStack: "C++, Object-Oriented Programming (OOP), Control Theory",
    narrative:
      "A repository dedicated to showcasing foundational C++ architecture from competitive robotics. Features a custom **PID Controller** implementation and system-level **OOP encapsulation**. This demonstrates deep technical understanding of efficiency and scalable architecture.",
    status: "Complete",
    liveLink: null,
    codeLink: "https://github.com/AntonioMontalvo/CppRoboticsCore",
  },
  {
    id: 2,
    title: "Project 2: E-Commerce MERN Stack App",
    techStack:
      "React, Node.js, Express, MongoDB, TypeScript, Tailwind CSS, Zustand, JWT Auth",
    narrative:
      "A complex, full-stack e-commerce platform demonstrating secure authentication, admin controls (RBAC), multi-step checkout, and robust server-side order management. **Showcases OOP principles translated into clean, scalable Node.js architecture.**",
    status: "95% Complete",
    liveLink: "https://antonio-ecommerce-app.vercel.app",
    codeLink: "https://github.com/AntonioMontalvo/EcommerceApp",
  },
  {
    id: 3,
    title: "Project 3: Robotics Data Visualization Dashboard",
    techStack: "Full-Stack Python (Flask), Pandas, React, Chart.js, CORS",
    narrative:
      "A dual-stack application where the **Python/Flask back-end** processes complex sensor data (using Pandas) and serves it to a React front-end for visualization. **Highlights proficiency in Python data handling and API development.**",
    status: "Complete",
    liveLink: "https://antonio-dataviz-app.vercel.app",
    codeLink: "https://github.com/AntonioMontalvo/DataVizApp",
  },
  {
    id: 4,
    title: "Project 4: C++ Performance Utility (Benchmark)",
    techStack: "C++ (Standard Library), Console Application, Timing",
    narrative:
      "A targeted utility designed to run resource-intensive calculations (Recursive Fibonacci at N=45). Used specifically to establish a clear **performance benchmark** against the identical implementation in Node.js (Project 5). This frames discussions around technical trade-offs and latency.",
    status: "Complete",
    liveLink: null,
    codeLink: "https://github.com/AntonioMontalvo/CppPerformanceDemo",
  },
  {
    id: 5,
    title: "Project 5: Asynchronous Flexibility Demo",
    techStack: "Node.js, TypeScript, REST API Consumption",
    narrative:
      "A demonstration using Node.js to quickly manage concurrent asynchronous operations (e.g., fetching data from multiple external APIs simultaneously). **Used to discuss rapid prototyping and the non-blocking nature of JavaScript vs. C++.**",
    status: "Complete",
    liveLink: null,
    codeLink: "https://github.com/AntonioMontalvo/NodeJsFlexibilityDemo",
  },
  {
    id: 6,
    title: "Project 6: Python File Automation Script",
    techStack: "Python (Standard Library), Pandas",
    narrative:
      "A command-line tool that automates a real-world task (e.g., filtering large log files or converting data formats). **Showcases Python's power in scripting, utility, and automation for quick, practical solutions.** (Partially integrated with Project 3 data).",
    status: "Complete",
    liveLink: null,
    codeLink: "https://github.com/AntonioMontalvo/DataVizApp", // Link to DataViz repo as it uses the same environment
  },
  {
    id: 1,
    title: "Project 1: The Portfolio Site (The Shell)",
    techStack: "React, React Router, Tailwind CSS, TypeScript",
    narrative:
      "The professional front-end that ties the entire story together. **Designed for optimal readability and mobile responsiveness, demonstrating best practices in modern front-end structure.**",
    status: "Complete",
    liveLink: null,
    codeLink:
      "https://github.com/AntonioMontalvo/Antonio-Portfolio-Master/tree/main/portfoliosite",
  },
];
