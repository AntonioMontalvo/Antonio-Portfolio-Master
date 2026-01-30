// portfoliosite/src/pages/AboutPage.tsx

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-4xl font-extrabold text-indigo-700 mb-4">
        Development Approach
      </h1>

      {/* --- AI-Augmented Development --- */}
      <section className="mb-12 p-8 bg-white rounded-xl shadow-lg border-l-4 border-indigo-500">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Development Workflow
        </h2>
        <p className="mb-4 text-lg text-gray-700">
          For this portfolio, I needed to learn several technologies—Next.js 16,
          PostgreSQL, OAuth, and server components—while building
          production-ready applications. I use AI tools (GitHub Copilot, Claude)
          as pair programming partners to accelerate implementation while
          applying my judgment to architecture and design decisions.
        </p>
        <div className="grid md:grid-cols-2 gap-6 my-6">
          <div className="bg-indigo-50 p-5 rounded-lg">
            <h3 className="font-bold text-indigo-900 mb-3">AI Handles</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Boilerplate generation</li>
              <li>• Syntax suggestions</li>
              <li>• API exploration</li>
              <li>• Debugging assistance</li>
            </ul>
          </div>
          <div className="bg-green-50 p-5 rounded-lg">
            <h3 className="font-bold text-green-900 mb-3">I Handle</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Architecture decisions</li>
              <li>• Technology selection</li>
              <li>• Security patterns</li>
              <li>• Code review & testing</li>
            </ul>
          </div>
        </div>
        <p className="text-lg text-gray-700 italic">
          <strong>Example:</strong> The kanban-next project was a learning
          experience in Next.js to a deployed full-stack application with OAuth,
          PostgreSQL, server components, and 27 passing tests in just a few
          weeks.
        </p>
      </section>

      {/* --- Validation & Quality --- */}
      <section className="mb-12 p-8 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Quality Through Validation
        </h2>
        <p className="mb-4 text-lg text-gray-700">
          Every AI suggestion gets reviewed. I maintain comprehensive test
          coverage (27 tests in kanban-next, testing library in e-commerce),
          enforce TypeScript's strict mode, and verify architectural decisions
          against best practices.
        </p>
        <p className="text-lg text-gray-700">
          The skill isn't accepting suggestions blindly—it's knowing what needs
          human oversight and when AI is wrong. When AI suggested storing user
          IDs client-side, I caught the security issue and moved authentication
          to server-side session checks.
        </p>
      </section>

      {/* --- Technical Philosophy --- */}
      <section className="p-8 bg-white rounded-xl shadow-lg border-r-4 border-indigo-500">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Choosing the Right Tool for the Job
        </h2>
        <p className="mb-6 text-lg text-gray-700">
          My portfolio tries to convey versatility across different technical
          approaches. Each project uses the technology best suited to its
          requirements.
        </p>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-400 pl-4">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              PostgreSQL vs MongoDB
            </h3>
            <p className="text-gray-700">
              Kanban board uses PostgreSQL for structured task data with foreign
              key relationships. E-commerce uses MongoDB for flexible product
              schemas with dynamic attributes. Different problems, different
              solutions.
            </p>
          </div>
          <div className="border-l-4 border-green-400 pl-4">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              OAuth vs JWT
            </h3>
            <p className="text-gray-700">
              Next.js kanban implements Google OAuth for better UX and delegated
              security. MERN e-commerce uses JWT for learning authentication
              flows and token management. Both appropriate for their contexts.
            </p>
          </div>
          <div className="border-l-4 border-purple-400 pl-4">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              Server vs Client Rendering
            </h3>
            <p className="text-gray-700">
              Next.js version demonstrates server-side rendering for SEO and
              initial load performance. Vite version shows client-side
              architecture for comparison. Understanding the tradeoffs matters
              more than picking sides.
            </p>
          </div>
        </div>
      </section>

      {/* --- Technical Background --- */}
      <section className="mb-12 p-8 bg-white rounded-xl shadow-lg border-l-4 border-purple-500">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Systems Programming Background
        </h2>
        <p className="mb-4 text-lg text-gray-700">
          Beyond web development, I have experience in systems programming
          including work with VEX Robotics teams implementing C++ solutions for
          autonomous robot control—PID controllers, sensor reading, and
          real-time decision systems.
        </p>
        <p className="mb-4 text-lg text-gray-700">
          This background in low-level programming informs better architectural
          decisions in high-level languages. Understanding memory management,
          and hardware constraints provides perspective when optimizing
          JavaScript performance or designing database schemas.
        </p>
        <div className="bg-purple-50 p-5 rounded-lg">
          <p className="text-gray-700">
            <strong>Additional:</strong> Competition judge for VEX Robotics in
            early February, evaluating robot design, code quality, and team
            engineering notebooks.
          </p>
        </div>
      </section>

      {/* --- Call to Action --- */}
      <div className="mt-12 p-8 bg-indigo-600 text-white rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-4">Let's Build Something</h2>
        <p className="text-lg mb-6">
          I'm actively seeking full-stack development opportunities where I can
          contribute immediately while continuing to learn.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="https://github.com/AntonioMontalvo"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            View GitHub
          </a>
          <a
            href="https://linkedin.com/in/antonio-montalvo"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-indigo-700 text-white font-semibold rounded-lg hover:bg-indigo-800 transition-colors"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
