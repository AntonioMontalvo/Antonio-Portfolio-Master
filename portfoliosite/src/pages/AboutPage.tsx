// portfoliosite/src/pages/AboutPage.tsx

const AboutPage = () => {
  return (
    <div className="py-10">
      <h1 className="text-4xl font-extrabold text-indigo-700 mb-2">
        My Story: The Strategic Re-entry
      </h1>
      <p className="text-xl text-gray-600 mb-12">
        Leveraging Foundational C++ Expertise to Deliver Scalable Full-Stack
        Solutions.
      </p>

      {/* --- 1. Foundational Strength (The C++/Robotics Core) --- */}
      <section className="mb-12 p-8 bg-white rounded-xl shadow-lg border-l-4 border-indigo-500">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          From C++ and Robotics to Clean Architecture
        </h2>
        <p className="mb-4 text-lg text-gray-700">
          My technical journey began with competitive robotics, which required
          rigorous C++ development focused on **performance, memory management,
          and Object-Oriented Programming (OOP)**. This background instilled a
          deep understanding of software efficiency and clean architecture that
          I now apply to the full-stack environment.
        </p>
        <p className="text-lg text-gray-700 italic">
          **Key Example:** The VEX Robotics project required implementing a
          **Digital PID Controller** (Proportional-Integral-Derivative) to
          stabilize movement. This involved managing high-frequency sensor
          inputs, implementing output saturation, and precise
          time-slicing—skills directly transferable to building resilient,
          well-controlled systems in any language.
        </p>
      </section>

      {/* --- 2. The Career Break and Targeted Reskilling --- */}
      <section className="mb-12 p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          The Pivot: Choosing the Right Tools for Modern Development
        </h2>
        <p className="mb-4 text-lg text-gray-700">
          Following a career break, I didn't just learn new languages; I focused
          on understanding the core philosophies of modern web development
          frameworks. My goal was a strategic re-entry, using my existing
          foundation to quickly master scalable technologies.
        </p>
        <ul className="list-disc list-inside space-y-2 pl-4 text-lg text-gray-700">
          <li>
            **MERN Stack Mastery:** Built the E-commerce app (Project 2) using
            Node.js, Express, and MongoDB, prioritizing scalability, security
            (JWT), and maintaining strict **separation of concerns** in the
            architecture.
          </li>
          <li>
            **Python for Data:** Developed the Data Visualization App (Project
            3) using **Python/Flask and Pandas** specifically to showcase rapid
            development in scripting, data processing, and API creation.
          </li>
          <li>
            **Front-End Proficiency:** Achieved fluency in React, TypeScript,
            and modern state management (Zustand), focusing on component
            reusability and accessibility using Tailwind CSS.
          </li>
        </ul>
      </section>

      {/* --- 3. Technical Philosophy (The C++ vs. Node.js Comparison) --- */}
      <section className="p-8 bg-white rounded-xl shadow-lg border-r-4 border-indigo-500">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          My Philosophy: Choosing the Right Tool
        </h2>
        <p className="mb-4 text-lg text-gray-700">
          My background allows me to objectively assess when performance is
          paramount and when development speed and ecosystem matter more.
        </p>
        <div className="flex space-x-6 text-gray-700">
          <div className="w-1/2">
            <h3 className="text-xl font-semibold mb-2 text-red-700">
              The C++ Benchmark
            </h3>
            <p>
              The **C++ Performance Utility (Project 4)** demonstrates my
              ability to write raw, multisecond processing tasks in native code,
              proving I understand the nuances of efficiency, memory, and native
              compilation.
            </p>
          </div>
          <div className="w-1/2">
            <h3 className="text-xl font-semibold mb-2 text-green-700">
              The Node.js Flexibility
            </h3>
            <p>
              The **Node.js Flexibility Demo (Project 5)** implements the exact
              same task but highlights the trade-offs: speed vs. ease of
              integration, asynchronous handling, and the vast Node.js
              ecosystem.
            </p>
          </div>
        </div>
        <p className="mt-4 text-lg font-medium text-gray-700">
          I am a Mid-Level Full-Stack Developer ready to integrate my
          foundational engineering discipline with modern, scalable web
          solutions.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
