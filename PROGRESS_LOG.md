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
