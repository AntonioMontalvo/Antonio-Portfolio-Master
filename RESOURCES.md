# Learning Resources & Quick Reference

## 📚 Testing Resources

### React Testing Library

- **Official Docs:** https://testing-library.com/docs/react-testing-library/intro/
- **Cheat Sheet:** https://testing-library.com/docs/react-testing-library/cheatsheet/
- **Common Mistakes:** https://kentcdodds.com/blog/common-mistakes-with-react-testing-library
- **Query Priority Guide:** https://testing-library.com/docs/queries/about/#priority
- **Testing Playground:** https://testing-playground.com/ (Find the best queries for your HTML)

### Testing Patterns I've Learned

- **AAA Pattern:** Arrange (setup) → Act (execute) → Assert (verify)
- **Prop Capture Pattern:** Capture callbacks passed to mocked components to test "private" functions
- **Regression Testing:** Write tests for bugs you fix to prevent them from coming back
- **Transitive Mocking:** Mock libraries that child components use, even if parent doesn't use them
- **Query Selection:**
  - `getBy`: Throws if not found (element SHOULD exist)
  - `queryBy`: Returns null if not found (element SHOULD NOT exist)
  - Use aria-label with getByRole for robust, accessible queries

### Vitest

- **Getting Started:** https://vitest.dev/guide/
- **API Reference:** https://vitest.dev/api/
- **Config:** https://vitest.dev/config/

### Playwright (E2E)

- **Official Docs:** https://playwright.dev/
- **Best Practices:** https://playwright.dev/docs/best-practices
- **Debugging Guide:** https://playwright.dev/docs/debug

---

## ⚛️ Next.js Resources

### Official Next.js

- **Documentation:** https://nextjs.org/docs
- **Learn Next.js (Interactive):** https://nextjs.org/learn
- **App Router Guide:** https://nextjs.org/docs/app
- **Server Components:** https://nextjs.org/docs/app/building-your-application/rendering/server-components
- **Client Components ("use client"):** https://nextjs.org/docs/app/building-your-application/rendering/client-components
- **Metadata API:** https://nextjs.org/docs/app/building-your-application/optimizing/metadata

### Next.js Best Practices I've Learned

- **SSR Considerations:** localStorage, window, document only work client-side - use `typeof window !== "undefined"` checks
- **"use client" Directive:** Required for components using hooks, browser APIs, or event handlers
- **Component Organization:** Keep server components as default, mark client components explicitly
- **Modal Positioning:** Use fixed positioning for overlays to avoid stacking context issues
- **State Management:** Simpler is often better - avoid over-engineering with complex state patterns
- **Turbopack:** Next.js 16+ uses Turbopack by default (faster than Webpack)

### Next.js Tutorials

- **Lee Robinson's Videos:** https://www.youtube.com/@leerob
- **Next.js Conference Talks:** https://nextjs.org/conf
- **Vercel's YouTube:** https://www.youtube.com/c/VercelHQ

### Migration Tips (Vite → Next.js)

- Replace Vite imports with Next.js equivalents
- Add "use client" to components using hooks or browser APIs
- Update paths to use Next.js conventions (@/ for src alias)
- Test for SSR issues (localStorage, window access)
- Update test configuration for Next.js environment
- Use fixed positioning for modals/overlays instead of absolute

---

## 📊 Data Visualization

### Recharts

- **Official Docs:** https://recharts.org/
- **Examples:** https://recharts.org/en-US/examples
- **API Reference:** https://recharts.org/en-US/api
- **Quick Reference:** [RECHARTS_REFERENCE.md](Learning_Notes/RECHARTS_REFERENCE.md) (700+ lines)

### Key Recharts Patterns I've Learned

- **"use client" Required:** Recharts needs browser APIs for SVG rendering
- **ResponsiveContainer:** Always wrap charts with explicit height
- **Data Format:** Array of objects with consistent property names
- **Server → Client Pattern:** Server component fetches data, passes to client component for charts
- **Chart Types:** BarChart (comparisons), PieChart (proportions), LineChart (trends)
- **Styling:** Use fill prop or Cell component for colors
- **allowDecimals={false}:** For integer data on Y-axis

### Other Visualization Libraries

- **Chart.js:** https://www.chartjs.org/ (Canvas-based, great for animations)
- **Victory:** https://formidable.com/open-source/victory/ (React-native compatible)
- **Visx:** https://airbnb.io/visx/ (Low-level, more control)

---

## 💻 Algorithm Practice

### Pattern-Based Learning

- **Neetcode.io:** https://neetcode.io/ (Best for patterns)
- **Grokking the Coding Interview:** https://www.educative.io/courses/grokking-the-coding-interview
- **LeetCode Patterns:** https://seanprashad.com/leetcode-patterns/

### LeetCode

- **Top Interview Questions:** https://leetcode.com/problemset/all/?listId=wpwgkgt (filter by frequency)
- **NeetCode 150:** https://neetcode.io/practice (curated list)
- **LeetCode Explore:** https://leetcode.com/explore/

### Free Courses

- **FreeCodeCamp Algorithms:** https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/
- **Coursera (Princeton):** https://www.coursera.org/learn/algorithms-part1

---

## 🏗️ System Design

### Beginner-Friendly

- **System Design Primer:** https://github.com/donnemartin/system-design-primer
- **ByteByteGo YouTube:** https://www.youtube.com/@ByteByteGo
- **System Design Interview (free chapters):** https://www.amazon.com/System-Design-Interview-insiders-Second/dp/B08CMF2CQF

### Book

- **Designing Data-Intensive Applications** (read Chapters 1-4): https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/

---

## 📝 Blog Platforms

### Where to Write

- **dev.to:** https://dev.to/ (Best for developers, great SEO)
- **Medium:** https://medium.com/ (Larger audience, but paywalled)
- **Hashnode:** https://hashnode.com/ (Developer-focused, custom domain)

### Writing Tips

- **How to Write Technical Content:** https://www.freecodecamp.org/news/how-to-write-a-great-technical-blog-post-414c414b67f6/
- **Dev.to Writing Guide:** https://dev.to/michaelburrows/how-to-write-blog-posts-that-get-read-3ik9

---

## 🎨 UI/UX Tools

### Component Libraries

- **shadcn/ui:** https://ui.shadcn.com/ (Recommended - copy/paste components)
- **Radix UI:** https://www.radix-ui.com/ (Unstyled, accessible primitives)
- **Headless UI:** https://headlessui.com/ (Tailwind Labs)

### Design Resources

- **Tailwind Components:** https://tailwindcomponents.com/
- **Tailwind UI:** https://tailwindui.com/ (Premium but has free examples)
- **Figma Community:** https://www.figma.com/community

---

## 🔍 Job Search Resources

### Job Boards

- **RemoteOK:** https://remoteok.com/
- **We Work Remotely:** https://weworkremotely.com/
- **Remote.co:** https://remote.co/remote-jobs/
- **AngelList:** https://angel.co/jobs
- **Hacker News Who's Hiring:** https://news.ycombinator.com/jobs
- **Indie Hackers:** https://www.indiehackers.com/jobs

### Freelance Platforms

- **Upwork:** https://www.upwork.com/
- **Toptal:** https://www.toptal.com/
- **Gun.io:** https://gun.io/
- **Contra:** https://contra.com/

### Networking

- **Discord Communities:**

  - Reactiflux: https://discord.gg/reactiflux
  - Frontend Developers: https://discord.gg/frontend
  - Remote Work Hub: https://discord.gg/remotework

- **Slack Communities:**
  - Rands Leadership: https://randsinrepose.com/welcome-to-rands-leadership-slack/
  - Dev.to Community: https://dev.to/connect

---

## 🎥 YouTube Channels

### General Web Dev

- **Web Dev Simplified:** https://www.youtube.com/@WebDevSimplified
- **Fireship:** https://www.youtube.com/@Fireship
- **Kevin Powell (CSS):** https://www.youtube.com/@KevinPowell

### React-Specific

- **Jack Herrington:** https://www.youtube.com/@jherr
- **Theo - t3.gg:** https://www.youtube.com/@t3dotgg
- **Lee Robinson (Vercel):** https://www.youtube.com/@leerob

### Algorithms

- **NeetCode:** https://www.youtube.com/@NeetCode
- **Abdul Bari (theory):** https://www.youtube.com/@abdul_bari

---

## 🛠️ Tools & Extensions

### VS Code Extensions

- **ES7+ React Snippets:** Quick React component creation
- **Prettier:** Code formatting
- **ESLint:** Linting
- **Tailwind CSS IntelliSense:** Tailwind autocomplete
- **GitLens:** Git superpowers
- **Thunder Client:** API testing (Postman alternative)

### Browser Extensions

- **React Developer Tools:** Debug React apps
- **Lighthouse:** Performance audits
- **WAVE:** Accessibility checker
- **Redux DevTools:** State debugging (if using Redux)

### Online Tools

- **CodeSandbox:** https://codesandbox.io/ (Quick prototypes)
- **StackBlitz:** https://stackblitz.com/ (Like CodeSandbox, but faster)
- **Excalidraw:** https://excalidraw.com/ (Architecture diagrams)
- **Ray.so:** https://ray.so/ (Beautiful code screenshots)

---

## 📖 Books (Optional but Helpful)

### Technical

- **Clean Code** by Robert C. Martin (principles, not language-specific)
- **Designing Data-Intensive Applications** by Martin Kleppmann (system design)
- **Refactoring** by Martin Fowler (code improvement patterns)

### Career

- **The Pragmatic Programmer** by Hunt & Thomas
- **Cracking the Coding Interview** by Gayle Laakmann McDowell (still relevant)
- **Soft Skills** by John Sonmez (career development)

---

## 🎯 Quick Reference Sheets

### Testing Queries (React Testing Library)

```typescript
// Prefer these (in order):
getByRole("button", { name: /submit/i });
getByLabelText(/username/i);
getByPlaceholderText(/enter name/i);
getByText(/hello world/i);
getByDisplayValue(/john/i);

// Avoid these:
getByTestId("submit-button"); // Only as last resort
```

### Common Vitest Matchers

```typescript
expect(value).toBe(expected); // Strict equality
expect(value).toEqual(expected); // Deep equality
expect(value).toBeTruthy(); // Truthy check
expect(value).toHaveLength(3); // Array/string length
expect(fn).toHaveBeenCalled(); // Function called
expect(fn).toHaveBeenCalledWith(arg); // Function called with arg
```

### Next.js File Conventions

```
app/
  layout.tsx          → Root layout (required)
  page.tsx            → Home page (/)
  loading.tsx         → Loading UI
  error.tsx           → Error boundary
  not-found.tsx       → 404 page

  [folder]/
    page.tsx          → /folder route
    layout.tsx        → Folder-specific layout

  api/
    [route]/
      route.ts        → API endpoint
```

### Git Commit Message Format

```
feat: Add user authentication
fix: Resolve drag-drop bug in Kanban Board
docs: Update README with testing instructions
test: Add E2E tests for checkout flow
refactor: Simplify state management in TaskModal
chore: Update dependencies
```

---

## 🆘 When You're Stuck

### Debugging Steps

1. **Read the error message** (seriously, read it twice)
2. **Use `console.log`** (or debugger)
3. **Check the docs** (official docs first)
4. **Search Stack Overflow** (someone has asked before)
5. **Ask AI** (ChatGPT, Claude, GitHub Copilot)
6. **Ask the community** (Discord, Reddit r/reactjs)
7. **Take a break** (sometimes you just need to step away)

### Where to Ask for Help

- **Stack Overflow:** https://stackoverflow.com/questions/tagged/reactjs
- **Reddit r/reactjs:** https://www.reddit.com/r/reactjs/
- **Reddit r/webdev:** https://www.reddit.com/r/webdev/
- **Reactiflux Discord:** https://discord.gg/reactiflux
- **This chat:** Come back anytime with specific questions!

---

## 💰 Free Learning Platforms

- **FreeCodeCamp:** https://www.freecodecamp.org/
- **MDN Web Docs:** https://developer.mozilla.org/
- **Scrimba (some free):** https://scrimba.com/
- **Codecademy (some free):** https://www.codecademy.com/
- **Udemy (wait for sales):** https://www.udemy.com/

---

**Bookmark this file! You'll reference it constantly.**

**Pro tip:** When you find a great resource not listed here, add it! This becomes YOUR personal library.
