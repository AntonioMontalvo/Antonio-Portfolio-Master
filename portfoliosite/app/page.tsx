// src/app/page.tsx

import Link from "next/link";

const HomePage: React.FC = () => {
  // List of skills to display
  const primarySkills = [
    "React & Next.js (App Router)",
    "TypeScript",
    "Node.js & Express (MERN Stack)",
    "Tailwind CSS",
    "REST API Design",
    "Git & GitHub / CI/CD (Vercel)",
  ];

  const foundationSkills = [
    "JavaScript (UCLA Ext.)",
    "Java (UCLA Ext.)",
    "C++ (VEX Robotics)",
    "Object-Oriented Programming (OOP)",
    "Python (Data Handling)",
  ];

  return (
    // max-w-7xl centers the content; py-16 adds vertical padding
    <div className="container mx-auto py-16 px-4 max-w-6xl">
      {/* 1. Hero Section: The Narrative */}
      <section className="text-center mb-16 p-8 bg-white shadow-xl rounded-lg border-t-4 border-green-500">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900">
          Mid-Level Full-Stack Developer
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          Experienced programmer returning to the workforce. I leverage a strong
          foundational understanding of **Object-Oriented Programming
          (Java/C++)** for high-performance systems to build reliable, scalable
          web applications with **Next.js, React, and Node.js**.
        </p>
        <div className="mt-8">
          <Link
            href="/projects"
            className="inline-block px-8 py-3 text-lg font-semibold text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700 transition duration-300"
          >
            View Portfolio Projects →
          </Link>
        </div>
      </section>

      {/* 2. Skills Section: Modern Stack */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">
          Core Development Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {primarySkills.map((skill) => (
            <div
              key={skill}
              className="p-4 bg-white border border-gray-200 rounded-lg flex items-center shadow-sm"
            >
              <span className="text-green-500 mr-3 text-xl">✅</span>
              <p className="text-gray-700 font-medium">{skill}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Foundation Section: The Competitive Advantage */}
      <section>
        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">
          Foundational & Specialized Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {foundationSkills.map((skill) => (
            <div
              key={skill}
              className="p-4 bg-gray-100 border border-gray-300 rounded-lg shadow-inner"
            >
              <p className="text-gray-700 font-medium">
                <span className="text-gray-500 mr-2">⚙️</span>
                {skill}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
