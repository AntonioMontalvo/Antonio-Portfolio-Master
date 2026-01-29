# Antonio Montalvo - Portfolio Website

A portfolio site showcasing seven projects I built to demonstrate current full-stack development skills. I chose Vite over Create React App for faster build times, React 19 for modern hooks and concurrent rendering, and TypeScript to catch type errors before deployment.

## 🚀 Live Demo

**[View Live Portfolio](https://antonio-portfolio-master-bt2g.vercel.app/)**

## What This Site Covers

The portfolio presents seven projects spanning different technologies—MERN stack e-commerce, Next.js with PostgreSQL, Python Flask APIs, and C++ algorithm optimization. Each project addresses a different technical challenge, showing versatility across frontend frameworks, backend architectures, and database choices.

Navigation is intentionally simple: hero section introducing my background, projects with live demos and source links, and skills organized by category (Frontend, Backend, DevOps). The site is responsive and type-safe, using Tailwind for consistent styling without writing custom CSS for every breakpoint.

## 🛠️ Tech Stack

**Vite** was chosen for its instant dev server startup and hot module replacement—significantly faster than Create React App's Webpack-based build. For a portfolio site where I'm frequently updating project content, this speed matters during development.

**React 19** gave me access to the latest hooks and concurrent rendering features. TypeScript catches type errors at compile time rather than runtime, which prevents bugs from reaching production.

**Tailwind CSS 4** handles responsive design without writing custom media queries for every component. The utility-first approach keeps styles colocated with components, making it easier to update designs quickly.

Deployed on **Vercel** because it integrates directly with the GitHub repository—every push to main triggers an automatic deployment. No manual build steps or server configuration needed.

## � Development Approach

I build projects using an AI-augmented workflow—GitHub Copilot as a pair programming partner for rapid prototyping, debugging, and exploring unfamiliar APIs. This approach let me learn Next.js 16, PostgreSQL, and OAuth integration in weeks rather than months.

The architecture decisions, technology choices, and problem-solving remain human judgment. AI accelerates implementation, suggests patterns, and catches syntax errors. I validate every suggestion against best practices, maintain code quality through comprehensive testing (27 tests in kanban-next), and leverage TypeScript's type system to catch integration issues early.

This workflow represents modern software development in 2026—developers who effectively leverage AI tools deliver faster while maintaining quality. The skill isn't writing boilerplate; it's knowing what to build, how to architect it, and when AI suggestions need correction.

## �📦 Getting Started

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/AntonioMontalvo/PortfolioSite.git
cd PortfolioSite/portfoliosite

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the portfolio.

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 📁 Project Structure

```
portfoliosite/
├── src/
│   ├── components/        # React components
│   │   ├── Header.tsx     # Navigation header
│   │   ├── Hero.tsx       # Landing section
│   │   ├── Projects.tsx   # Project showcase
│   │   └── Skills.tsx     # Skills display
│   ├── data/              # Project and skills data
│   │   └── projectsData.ts
│   ├── pages/             # Route pages
│   ├── App.tsx            # Main app component
│   └── main.tsx           # App entry point
├── public/                # Static assets
└── index.html             # HTML template
```

## 🎨 Featured Projects

The portfolio includes seven projects demonstrating different technical approaches and skill sets:

**1. Full-Stack E-commerce (MERN)** - Complete shopping experience with MongoDB for flexible product schemas, Express API with JWT authentication, and Stripe payment integration. Shows understanding of NoSQL database design and secure authentication patterns.

**2. Kanban Board (Next.js)** - Built with PostgreSQL for structured task data and Google OAuth for authentication. Demonstrates server-side rendering, SQL database relationships, and multi-user data isolation. Deployed serverless on Vercel with Neon database.

**3. Kanban Board (Vite)** - The original React version using @dnd-kit for drag-and-drop functionality. Client-side only with local storage persistence. Built this first before migrating to Next.js to understand the differences between client-side and full-stack architectures.

**4. Data Visualization Dashboard** - React frontend consuming a Python Flask API that queries PostgreSQL for analytics. Recharts library for interactive graphs. Shows integration between different backend languages and frontend frameworks.

**5. C++ Performance Demo** - Algorithm optimization comparison demonstrating performance differences between naive and optimized implementations. Compiled native code for maximum performance.

**6. Node.js Flexibility Demo** - TypeScript runtime demonstration showing JavaScript's versatility beyond browser environments.

**7. C++ Robotics Core** - PID Controller and Robot class modeling from robotics coursework, showcasing object-oriented design in a systems programming context.

Each project has a live demo and GitHub source link. The variety shows adaptability across languages (TypeScript, Python, C++), frameworks (React, Next.js, Flask), and databases (MongoDB, PostgreSQL).

## 🚀 Deployment

Deployed automatically to Vercel on every push to `main` branch.

**Production URL**: [https://antonio-portfolio-master-bt2g.vercel.app/](https://antonio-portfolio-master-bt2g.vercel.app/)

## 👤 Author

**Antonio Montalvo**

- GitHub: [@AntonioMontalvo](https://github.com/AntonioMontalvo)
- LinkedIn: [linkedin.com/in/antonio-montalvo](https://linkedin.com/in/antonio-montalvo)
- Portfolio: [antonio-portfolio-master-bt2g.vercel.app](https://antonio-portfolio-master-bt2g.vercel.app/)

## 📄 License

This project is open source and available under the MIT License.
