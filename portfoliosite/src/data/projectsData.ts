// portfoliosite/src/data/projectsData.ts

import { IProject } from "../types";

// The final data model for all seven portfolio projects
export const projectsData: IProject[] = [
  {
    id: 6,
    title: "Project 6: Full-Stack Kanban Board (Next.js)",
    techStack:
      "Next.js 16, TypeScript, PostgreSQL, NextAuth, Zustand, @dnd-kit, Tailwind CSS, Vitest",
    narrative:
      "Full-stack task management application with drag-and-drop functionality, NextAuth OAuth, and PostgreSQL. Built from zero Next.js experience to deployed in a few weeks. Features 27 passing tests, server-side API routes, and proper separation of client/server logic.",
    status: "Complete",
    liveLink: "https://kanban-next-flame.vercel.app/",
    codeLink: "https://github.com/AntonioMontalvo/kanban-next",
  },
  {
    id: 2,
    title: "Project 2: E-Commerce MERN Stack App",
    techStack:
      "React, Node.js, Express, MongoDB, TypeScript, Tailwind CSS, Zustand, JWT Auth",
    narrative:
      "Full-stack e-commerce platform with secure JWT authentication, admin controls, multi-step checkout, and MongoDB. Demonstrates translating systems thinking into Node.js architecture—clean separation of concerns, proper error handling, and scalable structure.",
    status: "Complete",
    liveLink: "https://antonio-ecommerce-app.vercel.app",
    codeLink:
      "https://github.com/AntonioMontalvo/Antonio-Portfolio-Master/tree/main/EcommerceApp",
  },
  {
    id: 3,
    title: "Project 3: Robotics Data Visualization Dashboard",
    techStack: "Python, Flask, Pandas, React, Chart.js, CORS",
    narrative:
      "Python Flask backend processes sensor data with Pandas, serves it to a React frontend for visualization. Handles CORS, REST APIs, and data transformation. Shows proficiency across both Python data handling and JavaScript UI development.",
    status: "Complete",
    liveLink: "https://antonio-dataviz-app.vercel.app",
    codeLink:
      "https://github.com/AntonioMontalvo/Antonio-Portfolio-Master/tree/main/DataVizApp",
  },
  {
    id: 1,
    title: "Project 1: The Portfolio Site",
    techStack: "React, React Router, Tailwind CSS, TypeScript",
    narrative:
      "The site you're currently viewing. Built with React Router for navigation, Tailwind CSS for styling, and TypeScript for type safety. Mobile-responsive design with clean component architecture.",
    status: "Complete",
    liveLink: null,
    codeLink:
      "https://github.com/AntonioMontalvo/Antonio-Portfolio-Master/tree/main/portfoliosite",
  },
  {
    id: 7,
    title: "Project 7: C++ Robotics Core",
    techStack: "C++, Object-Oriented Programming, Control Theory",
    narrative:
      "Custom PID controller implementation and robot class models from VEX Robotics work. Demonstrates C++ architecture—encapsulation, control theory, and efficiency-focused design patterns.",
    status: "Complete",
    liveLink: null,
    codeLink:
      "https://github.com/AntonioMontalvo/Antonio-Portfolio-Master/tree/main/CppRoboticsCore",
  },
  {
    id: 4,
    title: "Project 4: C++ Performance Benchmark",
    techStack: "C++, Standard Library, Console Application",
    narrative:
      "Runs recursive Fibonacci calculation (N=45) to benchmark C++ performance. Used as comparison baseline against the identical Node.js implementation (Project 5) to understand performance trade-offs between compiled and interpreted languages.",
    status: "Complete",
    liveLink: null,
    codeLink:
      "https://github.com/AntonioMontalvo/Antonio-Portfolio-Master/tree/main/CppPerformanceDemo",
  },
  {
    id: 5,
    title: "Project 5: Node.js Async Flexibility Demo",
    techStack: "Node.js, TypeScript, REST API",
    narrative:
      "Demonstrates Node.js handling concurrent asynchronous operations—fetching from multiple APIs simultaneously. Shows the non-blocking nature of JavaScript and rapid prototyping capabilities compared to traditional compiled languages.",
    status: "Complete",
    liveLink: null,
    codeLink:
      "https://github.com/AntonioMontalvo/Antonio-Portfolio-Master/tree/main/NodeJsFlexibilityDemo",
  },
];
