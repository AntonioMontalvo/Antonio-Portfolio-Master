# Daily Progress Log

**Track your daily progress here. Update every evening.**

---

## Week 2: Next.js Migration & Testing (Jan 13-19, 2026)

### Friday, Jan 17, 2026

**Hours worked:** 6 hours
**Total Week 2:** 6 hours

**What I did:**

- ✅ Migrated KanbanBoard from Vite to Next.js 16.1.3
  - Set up Next.js project with TypeScript and Tailwind CSS
  - Migrated all components (Board, Column, TaskCard, TaskModal)
  - Configured @dnd-kit for drag-and-drop functionality
  - Set up Zustand store for state management
  - Migrated utility functions and types
- ✅ Migrated all 27 Vitest tests to work with Next.js
  - Fixed localStorage SSR issues with conditional checks
  - Updated test configuration for Next.js environment
  - All tests passing (27/27) ✅
- ✅ Fixed TaskModal overlay and styling issues
  - Resolved white text on white background issue
  - Fixed backdrop opacity and transition problems
  - Implemented proper modal structure with fixed positioning
  - Simplified state management for reliable modal behavior
  - Backdrop now properly covers viewport with translucent overlay
  - Modal card displays correctly with white background

**What I learned:**

- Next.js SSR considerations (localStorage only available client-side)
- Fixed vs absolute positioning for modal overlays
- Simplified state management is often better than complex transitions
- Next.js "use client" directive for client-side components
- Testing in Next.js environment requires different configuration
- Importance of iterative debugging and knowing when to simplify

**Challenges faced:**

- Modal backdrop opacity transitions were unreliable with complex state
- Struggled with stacking context issues (absolute vs fixed positioning)
- Multiple attempts at fade transitions before finding simple solution
- Build errors from duplicate/stray code during iterative fixes

**Solutions found:**

- Removed complex opacity state management
- Used simple `isOpen` check instead of separate `visible` state
- Fixed positioning for backdrop to cover entire viewport
- Simplified component structure for reliability over fancy transitions

**Status:**

- ✅ Next.js migration complete
- ✅ All tests passing
- ✅ Modal fully functional with correct styling
- Ready to continue with Week 2 goals

**Next focus:**

- Continue Week 2: Testing practice and algorithm study
- Explore Next.js features (App Router, Server Components)
- Build more complex applications with Next.js

---

### Tuesday, Jan 20, 2026

**Hours worked:** 4 hours
**Total Week 2-3:** 6 hours + 4 hours = 10 hours

**What I did:**

- ✅ Verified Next.js migration documentation accuracy
  - Reviewed MIGRATION_NOTES.md against actual implementation
  - Confirmed all 27 tests passing in migrated codebase
  - Validated TaskModal simplified approach documented correctly
  - Verified all components using "use client" and @/ imports
- ✅ Strategic portfolio planning session
  - Identified opportunity to differentiate KanbanBoard from EcommerceApp
  - Decided to add PostgreSQL + NextAuth.js to showcase different tech stack
  - Created comprehensive 5-day enhancement guide
  - Updated learning roadmap with revised plan
- ✅ **Implemented Day 1 Part 2: API Routes** (NEXTJS_ENHANCEMENT_GUIDE.md)
  - Created RESTful API endpoints in Next.js
    - `GET /api/tasks` - Get all tasks
    - `POST /api/tasks` - Create new task
    - `GET /api/tasks/[id]` - Get single task
    - `PUT /api/tasks/[id]` - Update task
    - `DELETE /api/tasks/[id]` - Delete task
  - Fixed Next.js 16 async params compatibility (await params)
  - Converted boardStore from localStorage to API calls
    - Made all CRUD operations async
    - Added loading and error states
    - Implemented optimistic UI updates for drag-and-drop
  - All 27 tests still passing ✅
  - Tested in browser - API calls working correctly
- ✅ **Deployed to Vercel** (Day 1 Part 1 complete!)
  - Created standalone GitHub repository: `AntonioMontalvo/kanban-next`
  - Learned about Vercel GitHub app permissions
  - Deployed successfully: https://kanban-next-flame.vercel.app/
  - Verified API routes working in production
  - Updated README with live demo and documentation

**What I learned:**

- Migration was primarily a learning investment, not performance upgrade
- Current client-only Next.js app doesn't leverage SSR benefits
- Strategic value: showing versatility across different stacks (MERN vs Next.js full-stack)
- Portfolio contrast: MongoDB/JWT vs PostgreSQL/NextAuth demonstrates breadth
- **Next.js 16 requires params to be awaited** - `{ params: Promise<{ id: string }> }`
- Converting sync store actions to async requires careful state management
- Optimistic updates improve UX for drag-and-drop operations
- **Vercel GitHub integration**: Need to explicitly grant repo access via GitHub app
- Monorepo vs separate repos: Separate repos cleaner for portfolio projects
- Git submodules vs independent repos: Independent repos easier to manage

**Strategic decisions:**

- **Portfolio differentiation strategy:**
  - EcommerceApp: MERN + JWT + Complex business logic
  - KanbanBoard: Next.js + PostgreSQL + NextAuth + Server components
- **Learning goals for enhancement:**
  - SQL vs NoSQL comparison
  - OAuth vs JWT authentication patterns
  - Next.js full-stack capabilities (API routes, server components)
  - Production deployment optimization with Vercel

**Plans created:**

- ✅ NEXTJS_ENHANCEMENT_GUIDE.md - 5-day implementation plan (15-20 hours)
  - Day 1: Deploy to Vercel + API Routes (3-4 hours)
  - Day 2: PostgreSQL database setup (4-6 hours)
  - Day 3: Server component dashboard (2-3 hours)
  - Day 4: NextAuth.js authentication (4-5 hours)
  - Day 5: Multi-user features & testing (3-4 hours)

**Status:**

- ✅ Migration verified and documented
- ✅ Enhancement guide created
- 🔄 Ready to start Day 1: Vercel deployment + API routes
- 🔄 PROGRESS_LOG.md update in progress
- ⏳ LEARNING_ROADMAP.md update pending

**Next focus:**

- Update LEARNING_ROADMAP.md with revised timeline
- Start Day 1: Deploy to Vercel and create API routes
- Transform kanban-next into full-stack Next.js application

---

### Wednesday, Jan 21, 2026

**Hours worked:** 5 hours
**Total Week 2-3:** 10 hours + 5 hours = 15 hours

**What I did:**

- ✅ **Day 2 Complete: PostgreSQL Database Setup** (NEXTJS_ENHANCEMENT_GUIDE.md)
  - Part 1: Set up Vercel Postgres (~1 hour)
    - Created PostgreSQL database via Vercel dashboard (Neon-powered)
    - Connected database to kanban-next project
    - Installed @vercel/postgres package
    - Configured environment variables in .env.local
    - Created test endpoint to verify connection
  - Part 2: Create Database Schema (~1.5 hours)
    - Designed tasks table with proper columns
    - Learned "column" is SQL reserved keyword → renamed to "status"
    - Created migration endpoint `/api/setup-db`
    - Successfully created tasks table with sample data
    - Verified schema in Vercel Postgres dashboard
  - Part 3: Update API Routes with SQL (~2 hours)
    - Migrated GET `/api/tasks` to PostgreSQL queries
    - Migrated POST `/api/tasks` with INSERT...RETURNING
    - Migrated GET `/api/tasks/[id]` with WHERE clause
    - Migrated PUT `/api/tasks/[id]` with dynamic UPDATE
    - Migrated DELETE `/api/tasks/[id]` with RETURNING
    - Implemented field mapping (database "status" ↔ frontend "column")
    - Added proper error handling for all operations
  - Part 4: Testing & Debugging (~30 min)
    - Tested GET all tasks - ✅ Working
    - Tested POST new task - ✅ Working
    - Tested GET single task - ✅ Working
    - Tested PUT update task - ✅ Working
    - Tested DELETE task - ✅ Working
    - Tested 404 error handling - ✅ Working
    - All API endpoints successfully migrated to PostgreSQL!
- ✅ **Created SQL_FUNDAMENTALS.md reference guide**
  - Comprehensive SQL reference (13 sections)
  - All CRUD operations explained with examples
  - PostgreSQL-specific patterns from kanban-next
  - Reserved keywords and best practices
  - Real examples from actual project code
- ✅ **Created REACT_TESTING_REFERENCE.md guide**
  - Complete React testing reference (15 sections)
  - Vitest + React Testing Library setup
  - Testing patterns for all component types
  - Mocking strategies and debugging techniques
  - Real examples from kanban-next tests

**What I learned:**

- **SQL Fundamentals:**
  - CRUD operations: SELECT, INSERT, UPDATE, DELETE
  - PostgreSQL data types: SERIAL, VARCHAR, TEXT, TIMESTAMP
  - Reserved keywords ("column", "table", "order", etc.)
  - Parameterized queries prevent SQL injection
  - RETURNING clause in PostgreSQL (INSERT/UPDATE/DELETE)
- **Vercel Postgres:**
  - Neon-powered serverless PostgreSQL
  - Template literal syntax: `sql\`SELECT \* FROM tasks\``
  - Alternative $1, $2 parameter syntax with sql.query()
  - Environment variables loaded from .env.local
- **Database Design:**
  - Primary keys with SERIAL auto-increment
  - NOT NULL constraints for required fields
  - DEFAULT values for timestamps
  - Proper column naming conventions (snake_case)
- **API Development:**
  - Dynamic UPDATE queries based on provided fields
  - Field mapping between database and frontend schemas
  - Error handling for 404s and database failures
  - Testing with curl and json.tool

**Challenges faced:**

- SQL "column" reserved keyword broke CREATE TABLE statement
- Understanding parameterized query syntax ($1 vs template literals)
- Building dynamic UPDATE query with variable field count
- Dev server kept restarting during testing

**Solutions found:**

- Renamed "column" field to "status" in database schema
- Used Vercel's template literal syntax for most queries
- Implemented dynamic query builder with paramIndex counter
- Used background process for dev server, separate terminal for curl

**Documentation created:**

- SQL_FUNDAMENTALS.md (850+ lines)
  - Complete SQL reference with real examples
  - PostgreSQL-specific patterns
  - Reserved keywords and best practices
  - CRUD operations with parameterized queries
- REACT_TESTING_REFERENCE.md (900+ lines)
  - Vitest + React Testing Library setup
  - Testing patterns for all component types
  - Mocking strategies and debugging techniques
  - Real examples from kanban-next tests

**Status:**

- ✅ Day 2 complete: PostgreSQL fully integrated
- ✅ All API routes using SQL queries
- ✅ Data persisting correctly in database
- ✅ All 27 tests still passing
- 📚 Created comprehensive reference guides
- ⏭️ Ready for Day 3: Server Components Dashboard

**Next focus:**

- Day 3: Create dashboard with server components
- Add data visualizations with Recharts
- Demonstrate Next.js SSR capabilities

---

### Thursday, Jan 22, 2026

**Hours worked:** 3 hours
**Total Week 2-3:** 15 hours + 3 hours = 18 hours

**What I did:**

- ✅ **Day 3 Complete: Server Components Dashboard** (NEXTJS_ENHANCEMENT_GUIDE.md)
  - Part 1: Create Dashboard Page (~1 hour)
    - Created `/app/dashboard/page.tsx` as async server component
    - Implemented direct database queries with `sql` template
    - Calculated task statistics (total, by status, completion rate)
    - Built UI with stats cards, progress bar, recent tasks list
    - Added navigation with Next.js Link component
    - Fixed routing confusion (page.tsx in different folders creates different routes)
    - Learned server components fetch once at render (not reactive like client components)
  - Part 2: Add Data Visualization (~1.5 hours)
    - Installed Recharts library for React-based charts
    - Created `DashboardCharts.tsx` client component with "use client"
    - Implemented Bar Chart for tasks by status distribution
    - Implemented Pie Chart for completion rate visualization
    - Implemented Line Chart for task creation timeline
    - Learned pattern: Server component fetches data → passes to client component for interactivity
  - Part 3: Navigation & Loading States (~30 min)
    - Added "View Dashboard" button to main board header
    - Added "Back to Board" button to dashboard header
    - Created `loading.tsx` special file for skeleton UI
    - Implemented pulse animations for loading states
    - All navigation uses Next.js Link for fast client-side routing
- ✅ **Created RECHARTS_REFERENCE.md guide** (700+ lines)
  - Complete Recharts quick reference
  - All chart types: Bar, Pie, Line, Area
  - Component documentation: ResponsiveContainer, XAxis, YAxis, Tooltip, Legend
  - Real examples from kanban-next dashboard
  - Common patterns and troubleshooting
  - Server/client component integration patterns

**What I learned:**

- **Next.js Server Components:**
  - Async functions can fetch data directly in component
  - Run on server, send pre-rendered HTML to browser
  - Great for SEO and initial load performance
  - Don't update reactively - need page refresh for new data
  - Perfect for dashboards with statistics
- **Server vs Client Components:**
  - Server: Direct DB access, no "use client", runs once
  - Client: Interactive, reactive updates, requires browser APIs
  - Pattern: Server fetches → Client renders interactive UI
- **Recharts Library:**
  - Must use "use client" directive
  - Requires ResponsiveContainer with explicit height
  - Data format: array of objects with consistent keys
  - allowDecimals={false} for integer data
  - Color consistency through COLORS object
- **Next.js Special Files:**
  - `page.tsx` creates routes (folder path determines URL)
  - `loading.tsx` shows during page load (automatic Suspense)
  - `route.ts` creates API endpoints
  - File-based routing is powerful and intuitive
- **Data Visualization Best Practices:**
  - Transform data in client component, not server
  - Group data by date using Map for timeline charts
  - Use color-coding consistent with app design
  - Conditional rendering when no data available

**Challenges faced:**

- Confusion about creating page.tsx when it "already exists"
- Dev server directory issues (running from wrong folder)
- Understanding when to use server vs client components
- Recharts requires client-side rendering

**Solutions found:**

- Learned Next.js routing: folder structure determines route
- page.tsx in `/app` → "/" route
- page.tsx in `/app/dashboard` → "/dashboard" route
- Server component can import and render client components
- Client components handle browser-dependent libraries

**Strategic value:**

- Dashboard demonstrates Next.js server-side rendering
- Recharts adds professional data visualization
- Clear architecture: server for data, client for interactivity
- Shows understanding of SSR vs CSR trade-offs

**Documentation created:**

- RECHARTS_REFERENCE.md (700+ lines)
  - Complete quick reference guide
  - All chart types with examples
  - Common patterns and troubleshooting
  - Server/client integration patterns
  - Common errors and solutions
- REACT_TESTING_REFERENCE.md (900+ lines)
  - Comprehensive testing guide
  - Setup instructions and best practices
  - Component testing patterns

**Status:**

- ✅ Day 1 Complete: Vercel deployment + API routes
- ✅ Day 2 Complete: PostgreSQL database migration
- ✅ Day 3 Complete: Server Components Dashboard
- All 27 tests still passing ✅
- kanban-next now a full-stack Next.js + PostgreSQL app!

**Next focus:**

- Day 4: Add NextAuth.js authentication
- Day 5: Multi-user features and final testing

---

### Friday, Jan 23, 2026

**Hours worked:** 5 hours
**Total Week 2-3:** 18 hours + 5 hours = 23 hours

**What I did:**

- ✅ **Day 4 Complete: NextAuth.js Authentication** (NEXTJS_ENHANCEMENT_GUIDE.md)
  - Part 1: Install and Configure NextAuth.js (~1.5 hours)
    - Installed `next-auth@^5.0.0-beta.30` package
    - Created `auth.config.ts` with Google OAuth provider configuration
    - Created `auth.ts` to export NextAuth functions (auth, signIn, signOut, handlers)
    - Set up Google OAuth app in Google Cloud Console
    - Configured OAuth consent screen and credentials
    - Added environment variables (GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, AUTH_SECRET)
    - Created users table in database with migration endpoint
  - Part 2: Create Login Page (~1 hour)
    - Created `/app/login/page.tsx` with beautiful gradient design
    - Added "Sign in with Google" button with Google logo SVG
    - Implemented server action for OAuth flow
    - Added informational card explaining demo authentication
    - Styled with Tailwind CSS (gradient background, rounded cards, shadows)
  - Part 3: Protect Routes (~1 hour)
    - Updated `/app/page.tsx` to check authentication with `auth()`
    - Added redirect to `/login` if user not authenticated
    - Updated `/app/dashboard/page.tsx` with auth protection
    - Created `UserMenu` component with avatar dropdown
    - Added user profile image with Next.js Image component
    - Implemented sign-out functionality via `/api/auth/signout`
  - Part 4: Database Integration (~1.5 hours)
    - Created users table schema (id, email, name, image, created_at)
    - Implemented signIn callback to save users to database
    - Added ON CONFLICT clause for existing users (upsert pattern)
    - Configured session callback to include database user ID
    - Configured JWT callback to store user ID in token
    - Created `/api/users` endpoint to view all users
    - Tested complete OAuth flow from Google → database → session

**What I learned:**

- **NextAuth.js v5 (Auth.js):**
  - Beta version with new API (different from v4)
  - Uses `auth()` function instead of `getServerSession()`
  - Callbacks: signIn (save to DB), session (add data), jwt (store in token)
  - Server actions in forms with "use server" directive
- **Google OAuth Setup:**
  - Need to create OAuth 2.0 Client ID in Google Cloud Console
  - Configure authorized redirect URIs for localhost and production
  - OAuth consent screen requires app name and support email
  - Client ID and Secret are sensitive credentials
- **Authentication Flow:**
  - User clicks "Sign in with Google"
  - NextAuth redirects to Google login
  - User authorizes app
  - Google redirects to `/api/auth/callback/google`
  - signIn callback saves user to database
  - Session created with user data
  - User redirected to home page
- **Session Management:**
  - Session stored in JWT token (not database)
  - Can add custom data to session via callbacks
  - `auth()` checks session on server components
  - Redirect pattern for protected routes
- **Next.js Image Component:**
  - Requires configuration for external domains
  - `unoptimized` flag for dynamic external images
  - Automatic responsive sizing and optimization

**Challenges faced:**

- NextAuth v5 beta documentation incomplete (used v4 patterns initially)
- Understanding callback execution order (signIn → jwt → session)
- Configuring Google OAuth redirect URIs for both local and production
- Getting user ID from database into session object
- Next.js Image domain configuration for Google profile images

**Solutions found:**

- Read NextAuth v5 migration guide and source code examples
- Drew diagram of callback flow to understand data passing
- Added both localhost:3000 and vercel.app URLs to Google OAuth
- Used RETURNING clause in INSERT to get user ID immediately
- Added `unoptimized` prop to Image component for external URLs

**Status:**

- ✅ Day 4 Complete: NextAuth.js authentication working
- ✅ Google OAuth configured and tested
- ✅ Users saved to database with upsert pattern
- ✅ Protected routes redirect to login
- ✅ User menu with profile picture and sign-out
- ⏭️ Ready for Day 5: Multi-user features

**Next focus:**

- Day 5: Add multi-user task filtering and ownership
- Update all API routes to filter by user_id
- Test with multiple user accounts
- Final documentation and deployment

---

### Tuesday, Jan 27, 2026

**Hours worked:** 3 hours
**Total Week 2-3:** 23 hours + 3 hours = 26 hours

**What I did:**

- ✅ **Day 5 Complete: Multi-User Features** (NEXTJS_ENHANCEMENT_GUIDE.md)
  - Part 1: Add user_id Column to Tasks (~30 min)
    - Created migration endpoint to add `user_id INTEGER` column to tasks table
    - Set up foreign key constraint (optional for demo)
    - Verified column added successfully in Vercel dashboard
  - Part 2: Update API Routes for Multi-User (~1.5 hours)
    - Updated GET `/api/tasks` to filter by `session.user.id`
    - Updated POST `/api/tasks` to save `user_id` from session
    - Updated PUT `/api/tasks/[id]` to verify task ownership
    - Updated DELETE `/api/tasks/[id]` to verify task ownership
    - Added 401 Unauthorized responses when not authenticated
    - Added 403 Forbidden responses when accessing other user's tasks
    - Tested all endpoints with authentication checks
  - Part 3: Update Dashboard for User-Specific Stats (~1 hour)
    - Modified dashboard SQL query to filter by `user_id`
    - Verified stats only show current user's tasks
    - Tested dashboard with different user accounts
    - Confirmed complete data isolation between users
    - Added UserMenu to dashboard header
  - Part 4: Testing & Verification (~1 hour)
    - Tested complete user journey: Sign in → Create → Edit → Delete → Dashboard → Sign out
    - Verified data isolation with second Google account
    - Confirmed user A cannot see user B's tasks
    - Tested authentication redirects work correctly
    - Verified all 27 tests still passing (no auth mocking needed for unit tests)
    - Confirmed production deployment working with authentication

**What I learned:**

- **Multi-Tenancy Patterns:**
  - Filter all queries by user_id for data isolation
  - Verify ownership before UPDATE/DELETE operations
  - Use session.user.id from authenticated session
  - Return 401 for missing auth, 403 for wrong owner
- **Database Schema Design:**
  - Foreign keys enforce referential integrity
  - ON DELETE CASCADE cleans up orphaned records
  - INTEGER type for foreign key references
- **Security Best Practices:**
  - Always check authentication in API routes
  - Verify resource ownership before mutations
  - Don't trust client-side filtering alone
  - Use server-side session data for user identity
- **Testing Multi-User Features:**
  - Need multiple accounts to verify isolation
  - Test edge cases (accessing other user's task IDs)
  - Verify SQL queries include WHERE user_id clause
  - Check both positive cases (own data) and negative (other's data)

**Challenges faced:**

- Remembering to add auth checks to ALL API routes
- Understanding when to return 401 vs 403 vs 404
- Testing with multiple Google accounts (switching browsers/incognito)
- Updating existing tasks in database to have user_id values

**Solutions found:**

- Created checklist of all API routes needing auth
- HTTP status codes: 401 (not logged in), 403 (not your resource), 404 (doesn't exist)
- Used Chrome normal + incognito mode for two accounts simultaneously
- Updated existing tasks with default user_id = 1 via migration

**Status:**

- ✅ Day 1 Complete: Vercel deployment + API routes
- ✅ Day 2 Complete: PostgreSQL database migration
- ✅ Day 3 Complete: Server Components Dashboard
- ✅ Day 4 Complete: NextAuth.js authentication
- ✅ Day 5 Complete: Multi-user features
- 🎉 **kanban-next ENHANCEMENT COMPLETE!**
- All 27 tests still passing ✅

**Portfolio Achievement:**

- ✅ Full-stack Next.js application deployed to Vercel
- ✅ PostgreSQL database with multi-user data isolation
- ✅ NextAuth.js OAuth authentication with Google
- ✅ Server components demonstrating SSR capabilities
- ✅ RESTful API routes with proper auth and ownership checks
- ✅ Data visualization with Recharts
- ✅ Complete contrast to EcommerceApp (MERN + JWT)

**Next focus:**

- Update LEARNING_ROADMAP.md with Week 2-3 completion
- Week 3: Portfolio migration to Next.js
- Document learnings for interviews (SQL vs NoSQL, JWT vs OAuth)

---

### Wednesday, Jan 28, 2026

**Hours worked:** 5 hours (morning + afternoon sessions)
**Total Week 2-4:** 26 hours + 5 hours = 31 hours

**What I did:**

**Morning Session (2 hours):**

- ✅ Verified environment variables in Vercel for production deployment
  - Confirmed GOOGLE_CLIENT_ID configured correctly
  - Confirmed GOOGLE_CLIENT_SECRET configured correctly
  - Confirmed AUTH_SECRET generated and set
  - Verified redirect URIs match production domain
- ✅ Redeployed kanban-next to Vercel with latest NextAuth changes
  - Pushed all commits to GitHub repository
  - Triggered automatic Vercel deployment
  - Verified build completed successfully
  - Confirmed all environment variables loaded in production
- ✅ Tested authentication flow in production environment
  - Tested "Sign in with Google" button on production URL
  - Verified OAuth redirect to Google works
  - Confirmed user authorization and consent screen
  - Verified redirect back to kanban app after auth
  - Tested task creation, editing, deletion as authenticated user
  - Tested dashboard showing user-specific statistics
  - Verified UserMenu displays profile picture and sign-out
  - Tested sign-out flow and redirect to login
  - Confirmed multi-user data isolation in production

**Afternoon Session (3 hours) - Week 4 Documentation:**

- ✅ **README Quality Upgrade:**
  - Reviewed both kanban-next and portfoliosite READMEs
  - Rewrote architecture sections in professional, practical voice
  - User provided writing sample establishing personalized style
  - Applied consistent voice: contextual, comparative, outcome-focused
  - Fixed API documentation to match actual implementation
  - Corrected response formats (wrapped objects vs raw arrays)
  - Updated field names to match frontend interface
- ✅ **AI-Augmented Development Positioning:**
  - Added "Development Approach" section to portfoliosite README
  - Documented strategy for LinkedIn and portfolio website updates
  - Positioned AI use as modern development practice, not weakness
  - Saved content to PROGRESS_LOG for future website/LinkedIn updates
- ✅ **Privacy & Documentation Audit:**
  - Scanned all .md files for personal information (age, career dates, employer)
  - Removed "8-year career break" reference from portfoliosite README
  - Verified all public documentation contains only name
  - Confirmed private planning docs stay in .gitignore
- ✅ **Repository Documentation Updates:**
  - Updated .gitignore in both repos to allow technical documentation
  - Made public: SQL_FUNDAMENTALS.md, REACT_TESTING_REFERENCE.md, RESOURCES.md
  - Made public: MIGRATION_NOTES.md, NEXTJS_ENHANCEMENT_GUIDE.md
  - Kept private: PROGRESS_LOG.md, LEARNING_ROADMAP.md, ECOMMERCE_POLISH_PLAN.md
  - Committed and pushed to both GitHub repositories
  - All README documentation links now work publicly

**What I learned:**

- **Professional Writing Voice:**
  - Start with context: "For this kind of project..."
  - Explain technical concepts through practical outcomes
  - Use comparisons to show breadth across projects
  - Show authority naturally without over-explaining
  - Acknowledge real-world constraints and solutions
- **AI-Augmented Development Narrative:**
  - Positioning AI as pair programming partner is strength, not weakness
  - Architecture decisions and problem-solving remain human judgment
  - Transparency shows modern development practices
  - Explains rapid learning velocity proactively
  - Differentiates implementation (AI) from judgment (human)
- **Documentation Strategy:**
  - Technical documentation strengthens portfolio (proves learning)
  - Personal planning docs should remain private
  - Clean separation between technical and personal narrative
  - Public docs demonstrate systematic approach and documentation skills
- **Production Deployment with Auth:**
  - Environment variables must be set in Vercel dashboard (not just .env.local)
  - Each deployment environment (Preview, Production) can have different variables
  - OAuth redirect URIs must include production domain (not just localhost)
  - Google OAuth requires explicit redirect URI whitelisting

**Status:**

- 🎉 **Week 4 Day 1-2: Documentation Complete!**
- ✅ Both READMEs rewritten in professional voice
- ✅ API documentation fixed and accurate
- ✅ AI-augmented development approach documented
- ✅ Technical documentation now public on GitHub
- ✅ Privacy audit complete - no personal details in public docs
- ✅ kanban-next fully deployed and tested in production
- ✅ Complete 5-day enhancement plan (Days 1-5)
- ✅ All tests passing (27/27) ✅
- 📊 **Total time:** 31 hours over 9 days (Jan 20-28)

**Key Achievements:**

- Built full-stack Next.js application from scratch
- Implemented modern OAuth authentication (vs traditional JWT)
- Designed PostgreSQL schema with proper relationships
- Created RESTful API with authentication and authorization
- Demonstrated server-side rendering vs client-side rendering
- Deployed production-ready app to Vercel with CI/CD
- Showcased different tech stack from EcommerceApp
- **Established professional writing voice for all documentation**
- **Positioned AI-augmented workflow as modern development practice**
- **Made technical documentation public while maintaining personal privacy**

**Next focus:**

- 📸 Take screenshots of kanban-next authentication flow
- 📸 Take screenshots of all 7 portfolio projects
- 📸 Add screenshots to kanban-next README
- 🌐 Update portfolio website with AI-augmented development section
- 💼 Update LinkedIn profile (About section + Skills)
- Start Week 3: Portfolio site migration to Next.js

---

### Wednesday, Jan 29, 2026

**Hours worked:** 6 hours
**Total Week 4:** 31 hours + 6 hours = 37 hours

**What I did:**

- ✅ **Added screenshots to kanban-next README** (6 screenshots)
  - Captured authentication flow (Google OAuth login)
  - Captured main kanban board interface with drag-and-drop
  - Captured task modal (create/edit functionality)
  - Captured dashboard with analytics (bar, pie, line charts)
  - Captured user menu and profile display
  - Added professional descriptions for each screenshot
  - Committed and pushed to GitHub
- ✅ **Updated portfoliosite README** - Expanded AI-augmented section
  - Rewrote from 3 paragraphs to structured sections
  - Applied user's authentic practical voice
  - Fixed punctuation (added em dashes, grammar corrections)
  - Made section more concrete with examples
- ✅ **Comprehensive portfolio site alignment** - Homepage & About page
  - Discovered major narrative gap: README said "modern AI developer", live site said "Strategic Re-entry" and "career break"
  - **Completely rewrote HomePage.tsx:**
    - Added stats showcase (7 projects, 4 stacks, 27 tests)
    - Added featured projects section with tech tags
    - Added "How I Work" section introducing AI approach
    - Removed all career break references
    - Final hero: "Building production applications with React, Next.js, PostgreSQL, and Python. Systems programming background in C++ and Java."
  - **Completely rewrote AboutPage.tsx:**
    - Removed all "Strategic Re-entry" and career gap narrative
    - Created 5 sections: Development Workflow, Quality Through Validation, Choosing the Right Tool, Systems Programming Background, Call to Action
    - Added AI handles vs I handle grid layout
    - Integrated VEX Robotics background (past tense) and upcoming judge role
    - User refined personally for authentic tone: "tries to convey", "few weeks", "was a learning experience"
- ✅ **Projects page overhaul:**
  - Simplified heading to just "Projects" (removed subtitle with old narrative)
  - Reordered projects: Next.js Kanban and E-commerce featured first
  - Rewrote all 7 project narratives in practical voice
  - Removed defensive "foundational C++/OOP" positioning
  - Applied same authentic voice throughout
- ✅ **Committed all changes to GitHub:**
  - Commit 1: HomePage and AboutPage updates (243 insertions, 78 deletions)
  - Commit 2: Projects page and projectsData updates
  - Automatic deployment to Vercel triggered

**What I learned:**

- **Authentic voice vs AI professional tone:**
  - "tries to convey" shows healthy self-awareness (charming, not insecure)
  - "few weeks" more humble than "under two weeks"
  - "was a learning experience" better than "zero experience to deployed"
  - Removing "My" prefixes (sounds childish)
  - Past tense for historical work, present for current capabilities
- **Strategic career positioning:**
  - Career gaps are interview topics, not portfolio narratives
  - Recent volunteer expertise (VEX Robotics) shows current relevance
  - Systems programming background provides credibility without timeline questions
  - Skip bootcamp mentions (sounds junior), skip employer names (privacy)
- **Narrative consistency matters:**
  - README, Homepage, About, and Projects must tell same story
  - Defensive positioning about career breaks weakens presentation
  - Lead with current capabilities and recent work
  - Technical decision-making shows expertise more than history
- **User editing pass catches nuances:**
  - AI gets structure and content right, but misses subtle voice
  - Self-aware without insecurity requires precise word choice
  - Less precision can be more authentic ("few" vs "under two")
  - Practical beats polished for technical authenticity

**Challenges faced:**

- Live site had completely different narrative from README
- Initial AboutPage too formal and defensive about career break
- Robotics framing inaccurate (current vs past tense)
- Dev server caching old content despite file updates
- Balancing humility with confidence in voice

**Solutions found:**

- Complete rewrite of HomePage and AboutPage vs incremental edits
- User provided full background to inform strategic decisions
- Accuracy corrections for robotics timeline (past tense, removed "currently")
- Hard server restart on different port (3001) cleared cache
- User's personal editing pass perfected authentic voice

**Status:**

- ✅ kanban-next README with screenshots complete
- ✅ portfoliosite README with expanded AI section complete
- ✅ HomePage completely rewritten and deployed
- ✅ AboutPage completely rewritten and deployed
- ✅ Projects page reordered and rewritten
- ✅ All changes committed and deployed to Vercel
- ✅ Narrative consistency achieved across all pages
- ⏳ 6 remaining projects need screenshots tomorrow

**Portfolio Achievement:**

- Established authentic, practical voice across entire site
- Removed all defensive career break positioning
- Positioned AI-augmented development as modern practice
- Featured strongest projects (Next.js Kanban, E-commerce) first
- Integrated systems programming background naturally
- Site now matches quality and voice of kanban-next README

**Next focus:**

- 📸 Take screenshots of remaining 6 portfolio projects tomorrow
- 📸 Add screenshots to corresponding project READMEs
- 🌐 Verify live portfolio site looks professional
- 💼 Update LinkedIn profile (About section + Skills)
- 📝 Optional: Write comparison blog post (MERN vs Next.js)

---

## 📝 Portfolio Website Updates (Future Task)

### AI-Augmented Development Section

**Location Option 1:** Add to Hero/About section after intro

```
My Development Approach: I leverage AI tools (GitHub Copilot, Claude) as pair programming partners—accelerating implementation while applying 20+ years of engineering judgment to architectural decisions. This workflow enabled me to build seven production-quality projects spanning React, Next.js, PostgreSQL, and Python in months, not years.
```

**Location Option 2:** Create dedicated "About Me" page with section:

#### How I Build Software in 2026

Modern software development isn't about memorizing syntax—it's about architectural thinking, problem decomposition, and leveraging the right tools. I use AI-augmented development as my primary workflow:

- **AI handles:** Boilerplate generation, API exploration, debugging assistance, syntax suggestions
- **I handle:** Architecture decisions (PostgreSQL vs MongoDB?), technology selection (OAuth vs JWT?), code review, testing strategy, security patterns

This approach let me return to the field after 8 years and quickly build production applications with modern stacks. The seven projects in this portfolio represent not just what I've built, but how efficiently modern developers can work when combining experience with AI acceleration.

#### Why This Framing Works

1. **Proactive transparency** - You control the narrative
2. **Positions you as forward-thinking** - Not hiding from AI, embracing it
3. **Explains the learning velocity** - "How did you learn this so fast?" is answered before they ask
4. **Shows maturity** - You distinguish between AI's role (implementation) and yours (judgment)
5. **Future-proofs your brand** - In 2026-2027, this will be even more normalized

**Key message:** "I'm not a developer who happens to use AI; I'm a modern developer who knows AI is now part of the toolkit, just like Git, IDEs, and Stack Overflow."

---

## Week 1B: EcommerceApp Polish (Jan 12-18, 2026)

### Tuesday, Jan 13, 2026 (Final - Day 7) 🎉

**Hours worked:** +0.5 hours (Day 7)
**Total today:** 4.25 hours
**Total Week 1B:** 7.25 hours (across 2 calendar days)

**What I did:**

- ✅ Day 7 Task 7.1: Micro-interactions
  - Added loading spinner to ProductList (consistent with other loading states)
  - Verified all button hover states consistent (scale effects + color transitions)
  - Smooth transitions applied throughout application
  - Modernized ProductList component (removed React.FC, unused React import)
- ✅ Day 7 Task 7.2: Final Audit
  - Tested complete user flow: Browse → Product Detail → Add to Cart → Checkout
  - Verified all screens at mobile (375px), tablet (768px), and desktop (1024px+)
  - Confirmed professional appearance matches portfolio site quality
  - All components modernized and consistent
- ✅ **COMPLETED ALL 7 DAYS OF ECOMMERCE POLISH PLAN!**

**What I learned:**

- useState pattern for loading states (no library needed)
- Modern React patterns (removing React.FC, direct hook imports)
- Importance of consistency across all components
- Strategic prioritization (skip low-ROI features like skeletons/toasts)
- Efficient project completion: 7 days of work in 2 calendar days

**Key Achievements:**

- ✅ Complete design system with green primary color (#10b981)
- ✅ Fully responsive (mobile/tablet/desktop)
- ✅ Professional Sweetwater-style product cards
- ✅ Enhanced header with dropdown and mobile menu
- ✅ Breadcrumb navigation on product details
- ✅ Sticky cart summary
- ✅ Checkout progress indicators
- ✅ Password visibility toggles and loading states
- ✅ All touch targets meet 44px accessibility minimum
- ✅ Modern component patterns throughout

**Status:**

- **EcommerceApp polish: 100% COMPLETE** ✅
- Ready to showcase in portfolio
- Production-quality code with consistent patterns
- All user flows tested and working

**Next focus:**

- Return to Week 1 goals: KanbanBoard testing practice
- Learn algorithms (Algos folder)
- Build confidence in testing and technical interview skills

---

### Tuesday, Jan 13, 2026 (Continued - Day 6)

**Hours worked:** +0.25 hours (Day 6)
**Total today:** 3.75 hours
**What I did:**

- ✅ Day 6 Task 6.1: Mobile Testing
  - Tested all screens at 375px mobile viewport
  - Made ProductDetailScreen heading responsive (text-2xl on mobile, text-4xl on desktop)
  - Made ProductDetailScreen price responsive (text-2xl on mobile, text-3xl on desktop)
  - Verified touch targets meet 44px minimum on all buttons
  - Tested forms on mobile - all work well with max-w-md constraint
  - Verified cart badge positioning on mobile menu
- ✅ Day 6 Task 6.2: Tablet Breakpoints
  - Made CartScreen heading responsive (text-2xl on mobile, text-4xl on desktop)
  - Reduced cart item image size on mobile (w-16 h-16, sm:w-20 sm:h-20)
  - Verified grid layouts at 768px and 1024px breakpoints
  - Product grid properly uses 1→2→3→4 columns across breakpoints
- ✅ Completed 6 days of planned work in 2 calendar days

**What I learned:**

- Mobile-first design with Tailwind responsive utilities (text-2xl md:text-4xl pattern)
- Importance of testing actual mobile viewport (375px) not just resizing browser
- Touch targets should be minimum 44px for accessibility
- Most layouts were already responsive thanks to Tailwind grid system

**Status:**

- Days 1-6 complete (only Day 7 remaining)
- All screens tested and working on mobile, tablet, desktop
- Ready for final polish and review

**Tomorrow's focus:**

- Day 7: Final polish (micro-interactions, loading states, final audit)
- Take screenshots for portfolio
- EcommerceApp will be complete!

---

### Tuesday, Jan 13, 2026 (Continued)

**Hours worked:** +0.5 hours (Day 5)
**Total today:** 3.5 hours
**What I did:**

- ✅ Day 5 Task 5.1: ProductDetailScreen Enhancement
  - Updated to green design system (replaced all indigo colors)
  - Added breadcrumb navigation (Home › Products › [Product Name])
  - Improved quantity selector (wider, centered text, green focus ring)
  - Enhanced Add to Cart button (green primary with hover scale effect)
  - Added loading spinner animation
- ✅ Day 5 Task 5.2: CartScreen Review & Fixes
  - Updated to green design system throughout
  - Made Order Summary sticky on scroll (sticky top-4)
  - Enhanced empty cart state with green colors
  - Improved quantity selector to match ProductDetailScreen
  - Added hover scale effect to remove button
  - Updated Proceed to Checkout button with green primary
- ✅ Tested on deployed site - all changes verified
- ✅ Completed 5 days of planned work in 2 calendar days

**What I learned:**

- Breadcrumb navigation improves perceived polish
- Sticky positioning (`sticky top-4`) for persistent UI elements
- Consistency across screens matters for professional feel
- Strategic skipping of low-value features (image gallery, related products)

**Status:**

- Days 1-5 complete (ahead of schedule)
- Design system fully applied across all screens
- Ready for Day 6 (mobile responsive testing)

**Tomorrow's focus:**

- Day 6: Mobile and responsive testing (375px, 768px, 1024px)
- Fix any layout breaks on mobile
- Improve touch targets

---

## Week 1: Kanban Board Testing (Jan 6-12, 2026)

### Monday, Jan 6, 2026

**Hours worked:** 0
**What I did:**

- Created learning roadmap and tracking system
- Reviewed plan with AI assistant

**What I learned:**

- Strategic path forward for next 6 months

**Blockers/Questions:**

- None yet

**Tomorrow's focus:**

- Set up Jest and React Testing Library
- Install dependencies

---

### Tuesday, Jan 7, 2026

**Hours worked:** ~3 hours (morning session)
**What I did:**

- ✅ Installed testing dependencies (vitest, @testing-library/react, jsdom, jest-dom)
- ✅ Created vitest.config.ts configuration file
- ✅ Created test setup files (src/test/setup.ts, src/test/types.d.ts)
- ✅ Added test script to package.json
- ✅ Wrote first test for TaskCard component (displays title)
- ✅ Wrote second test myself with guidance (displays description)
- ✅ Both tests PASSED! 🎉

**What I learned:**

- What testing is and WHY companies require it (safety net for code changes)
- Manual vs automated testing (clicking yourself vs code that clicks)
- The AAA pattern (Arrange, Act, Assert) - structure of every test
- How to render React components in tests with `render()`
- How to find elements on screen with `screen.getByText()`
- How to make assertions with `expect()` and `toBeInTheDocument()`
- Testing terminology: describe, it, expect, mock, assertion, render
- Watch mode auto-runs tests when files change
- How to fix TypeScript errors in test files

**Blockers/Questions:**

- None - everything worked smoothly!

**Afternoon focus:**

- Learn about test failures (intentionally break a test to see error messages)
- Continue with more TaskCard tests

**Tomorrow's focus:**

- ***

### Wednesday, Jan 8, 2026

**Hours worked:** ~7 hours (morning + afternoon session)
**What I did:**

**Morning Session:**

- ✅ Completed Test #4: "displays the drag handle icon" (learned screen.getByRole)
- ✅ Completed Test #5: "applies correct opacity when dragging" (library mocking)
- ✅ Completed Test #6: "applies full opacity when not dragging"
- ✅ All 6 TaskCard tests PASSING! 🎉
- ✅ Deep dive into TaskModal.tsx component architecture
- ✅ Traced data flow through entire application (TaskModal → Column → boardStore)

**Afternoon Session:**

- ✅ Created TaskModal.test.tsx test file
- ✅ Test #1: "renders form when open" - tested modal visibility
- ✅ Test #2: "does not render when closed" - learned queryBy vs getBy
- ✅ Test #3: "pre-fills form when editing existing task" - tested useEffect behavior
- ✅ Test #4: "calls onSave with form data when submitted" - form submission testing
- ✅ Test #5: "calls onClose when cancel button clicked" - callback testing
- ✅ Test #6: "shows delete button only when editing" - conditional rendering with cleanup()
- ✅ All 6 TaskModal tests PASSING! 🎉
- ✅ **12 total tests passing (6 TaskCard + 6 TaskModal)**

**What I learned:**

**Morning (Advanced Concepts):**

- **Library Mocking:** How to mock external libraries with `vi.mock()` and control their behavior
- **beforeEach():** Setting up default mock return values for all tests
- **vi.mocked().mockReturnValue():** Overriding mock behavior in specific tests
- **TypeScript workarounds:** Using `as any` to bypass strict type checking in tests
- **React concepts:**
  - Components are functions that React calls for you (not traditional JS function calls)
  - JSX is syntactic sugar for React.createElement()
  - Props are like function arguments, not class properties
  - useState returns [value, setterFunction] array (destructuring pattern)
  - useEffect is an "observer" that watches values and reacts to changes
  - Callback props (onSave, onClose) enable child→parent communication
  - "Lifting state up" pattern - data flows through component hierarchy
- **Component architecture:** TaskModal defines a contract (interface) but doesn't know WHO provides the functions
- **Form validation:** Using .trim() to prevent empty submissions
- **e.preventDefault():** Stopping default browser form submission behavior

**Afternoon (Form & Conditional Testing):**

- **Form Testing:**
  - `fireEvent.change()` to simulate typing in inputs
  - `getByLabelText()` to find form inputs by their labels
  - `getByDisplayValue()` to find inputs by their current value
  - `getByPlaceholderText()` for inputs with placeholder text
- **Query Differences:**
  - `getBy` throws error if not found (use when element SHOULD exist)
  - `queryBy` returns null if not found (use when element SHOULD NOT exist)
  - Used `queryBy` with `toBeNull()` to test conditional rendering
- **Testing Callbacks:**
  - `toHaveBeenCalled()` checks if mock function was called
  - `toHaveBeenCalledWith(arg1, arg2)` checks function was called with specific arguments
  - Read error messages to understand function signatures (object vs separate parameters)
- **Component Cleanup:**
  - `cleanup()` clears previous renders when testing multiple scenarios in one test
  - Useful for testing conditional rendering (button shows/hides based on mode)
- **Testing Pre-filled Forms:**
  - useEffect runs when component mounts with task prop
  - Verify form inputs contain task data using `getByDisplayValue()`

**Blockers/Questions:**

- Initially confused about React components vs regular functions - resolved ✅
- TypeScript errors with mock attributes object - fixed with `as any` ✅
- Understanding useState destructuring pattern - clarified ✅
- Error in Test #4: passed object to onSave instead of separate parameters - fixed by reading error message ✅

**Tomorrow's focus:**

- Continue with more component testing or move to Column/Board components
- Consider testing error states and edge cases
- Maybe add integration tests for drag-drop functionality

---

### Wednesday, Jan 14, 2026 - Day 3 Testing

**Hours worked:** ~3.5 hours
**What I did:**

- ✅ Fixed 3 failing tests in TaskCard.test.tsx (caused by yesterday's bug fixes)
  - Fixed 2 opacity tests (changed selector from cursor-pointer to bg-white)
  - Fixed drag handle button test (added aria-label selector)
- ✅ Created Board.test.tsx with comprehensive mocking strategy
- ✅ Wrote 3 tests for Board component:
  - Test #1: "renders all three columns" (basic rendering)
  - Test #2: "does not move task when dropped on invalid target" (regression test for bug fix)
  - Test #3: "drag handle has touch-none class for mobile dragging" (regression test for bug fix)
- ✅ **24 total tests passing** (6 TaskCard + 9 TaskModal + 6 Column + 3 Board)
- ✅ Both of yesterday's bug fixes now have regression tests!

**What I learned:**

**Advanced Testing Patterns:**

- **Prop Capture Pattern:** Captured `onDragEnd` callback from DndContext mock to test "private" handleDragEnd function
  - Pattern: `let capturedOnDragEnd: any = null;` then capture in mock, call in test
  - Brilliant technique for testing internal component logic without making it public
- **Transitive Mocking:** Board uses Column, Column uses useDroppable, so Board tests must mock useDroppable even though Board doesn't use it directly
- **CSS Class Testing:** Used `toHaveClass("touch-none")` to verify critical styling that affects functionality
- **Regression Testing:** Writing tests for bugs you fix to prevent them from coming back

**Testing Brittle Tests:**

- Tests broke when code structure changed (onClick moved from outer to inner div)
- Fixed by changing selectors to target correct elements
- Learned: Use accessible queries (aria-label) for more robust tests

**Mocking Strategy:**

- Mock external libraries (@dnd-kit/core, @dnd-kit/sortable) completely
- Mock Zustand store to track function calls (mockMoveTask)
- Provide minimum necessary mocks for component tree to render

**Key Insights:**

- beforeEach clears mock call history, not state data
- aria-label serves dual purpose: accessibility AND testing
- Testing "private" functions: capture callbacks passed to child components
- CSS classes ARE worth testing when they affect critical functionality
- Regression tests are essential for maintaining code quality over time

**Blockers/Questions:**

- Filename case issue: Board.Test.tsx vs Board.test.tsx - Vitest requires lowercase "test" ✅
- Missing useDroppable in mock - added after error message ✅
- Understanding how to test handleDragEnd (private function) - solved with prop capture ✅

**Tomorrow's focus:**

- Continue Week 1 testing plan (Day 4-5)
- Add more Board component tests or integration tests
- Work toward 60%+ coverage goal

---

### Thursday, Jan 9, 2026

**Hours worked:**
**What I did:**

- **What I learned:**

- **Blockers/Questions:**

- **Tomorrow's focus:**

- ***

### Saturday, Jan 10, 2026

**Hours worked:** ~4 hours
**What I did:**

- ✅ Created Column.test.tsx test file
- ✅ Wrote 6 tests for Column component (all passing!)
- ✅ Learned complex mocking: @dnd-kit/core, @dnd-kit/sortable, Zustand store
- ✅ Fixed failing test by understanding component DOM structure
- ✅ **18 total tests passing** (6 TaskCard + 6 TaskModal + 6 Column)
- ✅ Day 3 of Week 1 Guide completed

**What I learned:**

**Mocking Patterns:**

- **Transitive dependencies:** Need to mock libraries that child components use (TaskCard uses useSortable, so Column tests must mock it)
- **Zustand selector pattern:** How `useBoardStore((state) => state.addTask)` works - selector is a function that extracts specific properties from store
- **Mock data vs mocked libraries:** Mock data = test fixtures (mockColumn, mockTasks), mocked libraries = fake external dependencies (vi.mock)

**Testing Principles:**

- **Minimal test data:** Only include data needed for that specific test (use empty array when testing title, use mockTasks when testing task rendering)
- **Test isolation:** `beforeEach(() => vi.clearAllMocks())` ensures each test starts fresh with no leftover function call history
- **Screen vs Container:** `screen` for accessible queries (text, roles), `container` for DOM queries (CSS classes)

**Debugging Skills:**

- Read error messages carefully - "Unable to fire click event" meant element not found
- Trace through component structure to understand what's rendered
- Fixed test by changing `.closest("div[draggable]")` to `.closest("div")` because onClick is on outer div, not the draggable button

**Key Insight:**
Testing requires deep understanding of entire app structure. It's mentally exhausting but gets easier with practice. Need to track:

- Component hierarchy and props flow
- Which child components are rendered
- What libraries each component uses
- Where event handlers are attached (onClick on div vs button)

**Blockers/Questions:**

- Initially confused why test failed - learned to check actual DOM structure, not assumptions ✅
- Understanding Zustand selector pattern took multiple explanations - clarified ✅
- Realized testing is harder than expected because requires holding entire app architecture in head

**Tomorrow's focus:**

- Rest and reflect on learning
- Continue Week 1 according to guide (Board component + boardStore tests, or coverage check)

---

### Sunday, Jan 11, 2026

**Hours worked:** ~2 hours
**What I did:**

- ✅ Shifted to user-driven testing approach (vs following pre-written guide)
- ✅ Added 3 tests for TaskModal delete functionality:
  - Test #7: "calls window.confirm when Delete Task is clicked"
  - Test #8: "calls onDelete and onClose when user confirms deletion"
  - Test #9: "doesn't call onDelete and onClose when user cancels deletion"
- ✅ **21 total tests passing (6 TaskCard + 9 TaskModal + 6 Column)**
- ✅ Achieved 83.82% test coverage (up from 79.41%)
- ✅ TaskModal now at 100% coverage (up from 88%)

**What I learned:**

**User-Driven Testing:**

- Start from rendered UI and describe what to test from user perspective
- Focus on user behavior rather than code coverage gaps
- Pattern: "I want to test [user action/expectation]" → design test → implement

**Window.confirm Mocking:**

- `vi.spyOn(window, "confirm")` to intercept browser confirm dialog
- `mockReturnValue(true)` simulates user clicking OK
- `mockReturnValue(false)` simulates user clicking Cancel
- window.confirm returns boolean: true=OK, false=Cancel

**Negative Assertions:**

- `.not.toHaveBeenCalled()` tests functions were NOT called
- Important for testing cancel/abort scenarios
- Verifies component respects user's cancellation choice

**Component Responsibility:**

- TaskModal's job is to call callbacks (onDelete, onClose), not actually delete tasks
- Actual deletion happens in parent component (Column) via boardStore
- Tests verify component behavior, not side effects in other parts of app

**Blockers/Questions:**

- Brief confusion about window.confirm return values - clarified ✅
- Copy-paste error in Test #3 comment ("were called" vs "were NOT called") - fixed ✅

**Notes:**
Week 1 essentially complete! Exceeded coverage goal and successfully practiced user-driven test creation.

**Strategic Decision:**
After review, identified that EcommerceApp has visual polish issues (image sizing, form presentation, inconsistent aesthetics) that could hurt portfolio first impressions. Decision made to prioritize fixing these issues before continuing with advanced testing (Playwright E2E). Testing fundamentals are solid enough for interview discussions.

**Next focus:**

- Polish EcommerceApp visual issues (images, forms, aesthetics)
- Return to testing later once all portfolio projects look professional

---

## Week 1 Reflection

**Total hours:** ~12 hours (Jan 7, 8, 10, 11)
**Key achievements:**

- ✅ Set up testing environment (Vitest + React Testing Library)
- ✅ Wrote 21 passing tests across 3 components
- ✅ Achieved 83.82% test coverage (exceeded 60% goal)
- ✅ Learned testing fundamentals: AAA pattern, mocking, assertions, form testing
- ✅ Practiced user-driven test creation approach

**Challenges faced:**

- Understanding transitive dependencies in mocking
- Learning React component lifecycle for testing
- Zustand state management mocking patterns

**Strategic pivot:**

- Pausing advanced testing (Week 2 E2E) to polish EcommerceApp visual issues
- Will return to testing after portfolio projects are production-ready

**Adjustments needed:**

- Prioritize visual polish over advanced testing
- Focus on portfolio first impressions

---

## Week 1B: EcommerceApp Visual Polish (Jan 12-18, 2026)

### Monday, Jan 12, 2026 ✅

**Hours worked:** ~6 hours
**What I did:**

- ✅ Audited entire EcommerceApp to identify visual issues
- ✅ Created comprehensive 7-day action plan (ECOMMERCE_POLISH_PLAN.md)
- ✅ Fixed Vercel deployment configuration (root directory for monorepo)
- ✅ Implemented Sweetwater.com-style product grid (vertical cards, big red prices)
- ✅ Fixed image aspect ratios (square with white padding for all products)
- ✅ Improved ProductForm layout (max-w-2xl constraint, better image preview)
- ✅ Resolved Tailwind v4 configuration issue (grid classes not rendering)
- ✅ Implemented complete design system with CSS variables
- ✅ Enhanced header with user dropdown, mobile hamburger menu, sticky positioning
- ✅ Modernized React components (removed React.FC, unused imports)
- ✅ Applied consistent green brand color across all components

**Issues identified:**

1. **Image sizing problems** - aspect ratio distortion in ProductList, huge/tiny images in ProductDetail
2. **ProductForm layout** - takes full width, tiny preview, poor visual hierarchy
3. **Inconsistent design system** - mixing green/blue/indigo colors, varying typography
4. **Header mismatch** - different from portfolio site style
5. **Form polish needed** - basic styling, could use better UX

**Completed today:**

**Day 1 Tasks:**

- ✅ Task 1.1: Fix image aspect ratios (square images with white padding)
- ✅ Task 1.2: Improve ProductForm layout (centered, max-width, better preview)
- ✅ Task 1.3: Better image upload UX (larger preview, square aspect)
- ✅ Bonus: Redesigned to Sweetwater-style grid (1/2/3/4 columns responsive)

**Day 2 Tasks:**

- ✅ Task 2.1: Define color palette (green primary, semantic colors via CSS variables)
- ✅ Task 2.2: Typography standardization (heading-1 through heading-4 classes)
- ✅ Applied design system across ProductList, LoginForm, RegisterForm, ProductForm, Header

**Day 3 Tasks:**

- ✅ Task 3.1: Unified header design (sticky, user dropdown, mobile menu)
- ✅ Cart badge visibility (red error color)
- ✅ Mobile hamburger menu with responsive breakpoints
- ✅ Simplified navigation (removed non-existent Profile/Orders pages)

**What I learned:**

- Tailwind CSS v4 uses `@import "tailwindcss"` instead of `@tailwind` directives
- Tailwind v4 doesn't need tailwind.config.js (CSS-based configuration)
- Vercel monorepo deployments require setting root directory in project settings
- Design references (like Sweetwater.com) provide clear direction for visual improvements
- CSS variables with `@theme` provide powerful design system in Tailwind v4
- Modern React (v17+) doesn't require importing React for JSX
- Component simplification: `const Header = ()` > `const Header: React.FC = ()`
- Sticky positioning (`sticky top-0 z-50`) keeps navigation accessible

**Blockers/Questions:**

- ✅ Solved: Grid classes not rendering (Tailwind v4 config issue)
- ✅ Solved: Vercel deployment (wrong repo/root directory)
- ✅ Solved: Design inconsistency (implemented CSS variable system)

**Tomorrow's focus:**

- Day 4: Form improvements (loading states, password visibility, validation feedback)
- Day 5: Product detail and cart screen enhancements
- Consider mobile responsive testing

---

**On track for Week 1B?** Yes - completed 3 days of work in 1 day!

---

### Tuesday, Jan 13, 2026 ✅

**Hours worked:** ~3 hours
**What I did:**

- ✅ Enhanced Login and Register forms with modern UX patterns
- ✅ Added password visibility toggles to all password fields
- ✅ Implemented loading states with spinner animations
- ✅ Updated checkout flow (Shipping, Payment screens)
- ✅ Created checkout progress indicator (visual step tracker)
- ✅ Applied design system colors consistently across all forms
- ✅ Improved form layouts (grid for city/postal fields)
- ✅ Added placeholders and better labels to all inputs

**Day 4 completed tasks:**

- ✅ Task 4.1: Enhanced Login/Register forms (password toggle, loading, design system)
- ✅ Task 4.2: Checkout flow polish (progress indicator, consistent styling, better UX)

**What I learned:**

- Password visibility toggles greatly improve UX (users can verify input)
- Loading states with spinners provide important feedback during async operations
- Progress indicators in multi-step forms reduce user anxiety and confusion
- Radio button styling can be enhanced with border highlighting on selection
- Grid layouts (2-column) save vertical space for related fields (city/postal)
- Consistent placeholder text guides users on expected input format

**Blockers/Questions:**

- None - smooth development session

**Status:**

- Completed Days 1-4 of EcommerceApp polish (Jan 12-13)
- Days 5-7 completed same day (see entries above at top of log)

---

**On track for Week 1B?** Yes - completed 4 days of work in 2 days!

---

## Week 2: Testing Practice Continuation (Jan 13-19, 2026)

### Wednesday, Jan 15, 2026 ✅

**Hours worked:** ~1 hour (short afternoon session)
**What I did:**

- ✅ Added 2 new Board component tests (Test #4 and Test #5)
- ✅ Test #4: "moves task when dropped on valid column" - tests successful drop on valid column target
- ✅ Test #5: "does not move task when dropped outside any column" - tests edge case with `over: null`
- ✅ All 27 tests passing (up from 24) in KanbanBoard project
- ✅ Fixed outdated PROGRESS_LOG entry that referenced completed EcommerceApp work

**What I learned:**

- **Edge case testing:** How `over: null` represents dropping outside the board (no target under cursor)
- **Defensive programming:** Early return (`if (!over) return;`) prevents errors when no drop target exists
- **Test pairing strategy:** Testing both positive case (valid drop) and negative cases (invalid target + null)
- **Mock data connections:** Understanding how test events reference mock data (task-1 in tests connects to mock tasks array)
- **AAA pattern mastery:** Successfully applied Arrange-Act-Assert pattern independently

**Key concepts reinforced:**

- Valid drop test: `over: { id: "inProgress" }` simulates dropping on valid column
- Null check test: `over: null` simulates dropping outside board area
- Captured callback pattern: Using `capturedOnDragEnd` to test private handleDragEnd function
- Negative assertions: `expect(mockMoveTask).not.toHaveBeenCalled()` verifies function wasn't called

**Blockers/Questions:**

- None - smooth short session with great learning moments

**Tomorrow's focus:**

- Continue KanbanBoard testing OR
- Move to Next.js migration (Week 3) OR
- Start signature project planning
- Flexible based on energy/interest

---

**On track for Week 2?** Yes - testing practice progressing well with deep understanding!

---

### Thursday, Jan 16, 2026 ✅

**Hours worked:** ~1.5 hours (so far - Day 1 of migration)
**What I did:**

- ✅ Renamed KanbanBoard → KanbanBoard-Vite (preserving reference implementation)
- ✅ Created new Next.js project (kanban-next) with TypeScript, Tailwind CSS, ESLint
- ✅ Set up testing environment (Vitest + React Testing Library in Next.js)
- ✅ Created vitest.config.ts and test setup files
- ✅ Verified testing works (1 passing test)
- ✅ Migrated shared code to Next.js:
  - types/index.ts (no changes needed)
  - utils/storage.ts (updated imports to use @/ alias)
  - stores/boardStore.ts (added 'use client' directive, updated imports)
- ✅ Installed Zustand for state management

**Day 1 Migration Steps Completed:**

- ✅ Step 1: Created Next.js project
- ✅ Step 2: Set up testing environment
- ✅ Step 3: Migrated shared code (types, utils, stores)

**What I learned:**

- **Next.js naming:** Project names must be lowercase (kanban-next not KanbanBoard-Next)
- **'use client' directive:** Marks code as browser-only, prevents server-side execution errors
- **File structure differences:** Next.js uses `app/` folder instead of `src/`, no src directory by default
- **Import aliases:** Next.js uses `@/` for imports from root (e.g., `@/types`, `@/stores`)
- **Testing in Next.js:** Vitest works identically to Vite setup, same configuration pattern
- **Defensive programming:** Adding 'use client' to stores with localStorage prevents SSR issues

**Migration strategy:**

- Keeping both Vite and Next.js versions for portfolio diversity
- Two talking points: "Built with Vite" and "Migrated to Next.js"
- Tests will transfer with minimal changes (mostly import path updates)

**Blockers/Questions:**

- Clarified: 'use client' in boardStore.ts is defensive (localStorage access at initialization)
- Resolved: React Compiler not needed (experimental, adds unnecessary complexity)

**Next session focus:**

- Day 2: Migrate components one-by-one (TaskCard, TaskModal, Column, Board)
- Copy corresponding test files
- Update test imports and verify all 27 tests still pass

---

**On track for Week 2?** Yes - successfully started Next.js migration!

---

### Monday, Jan 13, 2026

**Hours worked:**
**What I did:**

- **What I learned:**

- **Blockers/Questions:**

- **Tomorrow's focus:**

- ***

[Continue this pattern for each week...]

---

## Monthly Review Template

### Month 1 Review (January 2026)

**Total hours worked:**
**Major achievements:**

1.
2.
3.

**Biggest challenges:**

1.
2.

**What I learned about myself:**

- **Adjustments to roadmap:**

- **Confidence level (1-10):**
  **On track for Month 2?** Yes / No

  **Next month's focus:**

1.
2.
3.

---

## Tips for Using This Log

1. **Update daily** (even if just 5 minutes)
2. **Be honest** - no one is judging
3. **Track actual hours** - helps adjust estimates
4. **Note blockers immediately** - don't let them fester
5. **Celebrate small wins** - check off tasks feels good!
6. **Review weekly** - stay accountable

**Template for quick daily entry:**

```
**Hours:** X
**Did:** Y
**Learned:** Z
**Blocker:** None / [issue]
**Tomorrow:** Next task
```
