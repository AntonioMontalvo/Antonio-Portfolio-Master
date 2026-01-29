# React Testing Reference Guide

**Last Updated:** January 21, 2026  
**Purpose:** Comprehensive reference for testing React applications  
**Tools:** Vitest, React Testing Library, @testing-library/user-event  
**Context:** Created from kanban-next testing experience

---

## 📋 Table of Contents

1. [What is Testing?](#what-is-testing)
2. [Why Test React Components?](#why-test-react-components)
3. [Testing Tools Overview](#testing-tools-overview)
4. [Setup & Installation](#setup--installation)
5. [Testing Fundamentals](#testing-fundamentals)
6. [The AAA Pattern](#the-aaa-pattern)
7. [React Testing Library Basics](#react-testing-library-basics)
8. [Querying Elements](#querying-elements)
9. [User Interactions](#user-interactions)
10. [Testing Patterns by Component Type](#testing-patterns-by-component-type)
11. [Mocking](#mocking)
12. [Testing State Management](#testing-state-management)
13. [Common Testing Mistakes](#common-testing-mistakes)
14. [Best Practices](#best-practices)
15. [Debugging Tests](#debugging-tests)

---

## What is Testing?

**Testing** is the process of verifying that your code works as expected.

**Key Concepts:**

- **Test**: A piece of code that checks if your application code behaves correctly
- **Test Suite**: A collection of tests for a specific component or feature
- **Assertion**: A statement that checks if a condition is true (e.g., "this button should render")
- **Test Runner**: Tool that executes tests and reports results (e.g., Vitest, Jest)

**Types of Tests:**

```
Unit Tests (Fast, Many)
  └─ Test individual components in isolation
     Example: TaskCard renders title correctly

Integration Tests (Medium speed, Some)
  └─ Test how components work together
     Example: Board + Column + TaskCard interaction

E2E Tests (Slow, Few)
  └─ Test entire user flows in real browser
     Example: User creates task, drags it, deletes it
```

**Testing Pyramid:**

```
        /\
       /  \     E2E Tests (5-10%)
      /____\    Slow, expensive, fragile
     /      \
    /  Inte  \  Integration Tests (20-30%)
   / gration \  Medium speed
  /___________\
 /             \
/   Unit Tests  \ Unit Tests (60-70%)
/_________________\ Fast, cheap, reliable
```

---

## Why Test React Components?

### Benefits

✅ **Confidence**: Know your code works before deployment  
✅ **Refactoring Safety**: Change code without breaking features  
✅ **Documentation**: Tests show how components should be used  
✅ **Bug Prevention**: Catch issues early in development  
✅ **Regression Prevention**: Ensure old bugs don't come back

### What to Test

**✅ DO Test:**

- Component renders without crashing
- Props are displayed correctly
- User interactions work (clicks, typing, etc.)
- Conditional rendering (show/hide elements)
- Form submission and validation
- Error states and edge cases

**❌ DON'T Test:**

- Implementation details (internal state, component methods)
- Third-party library code (React, libraries are already tested)
- Styling details (use visual regression testing tools instead)
- Exact text formatting (test content, not whitespace)

### Testing Philosophy

> "The more your tests resemble the way your software is used, the more confidence they can give you." - Kent C. Dodds

**Test from user's perspective:**

- User sees text → Test with `getByText`
- User clicks button → Test with `userEvent.click()`
- User fills form → Test with `userEvent.type()`

---

## Testing Tools Overview

### Vitest

**Test runner** - Executes tests and reports results

**Features:**

- Fast (uses Vite's build system)
- Watch mode (re-runs tests on file changes)
- Coverage reports
- Compatible with Jest API

**Common Commands:**

```bash
npm test              # Run all tests once
npm test -- --watch   # Watch mode (re-run on changes)
npm test -- --coverage # Generate coverage report
npm test TaskCard     # Run tests matching "TaskCard"
```

### React Testing Library

**Component testing library** - Renders and queries components

**Philosophy:**

- Query by what users see (text, labels, roles)
- Avoid testing implementation details
- Encourage accessible components

**Core Functions:**

```typescript
render(); // Render component to virtual DOM
screen; // Query rendered elements
fireEvent; // Trigger events (deprecated, use userEvent)
waitFor(); // Wait for async changes
cleanup(); // Clean up after tests (automatic)
```

### @testing-library/user-event

**User interaction simulation** - Simulates real user behavior

**Why use it over `fireEvent`:**

- More realistic (simulates full interaction sequence)
- Better for forms (triggers all related events)
- Async by default (waits for changes)

**Common Methods:**

```typescript
await userEvent.click(button); // Click element
await userEvent.type(input, "text"); // Type into input
await userEvent.clear(input); // Clear input
await userEvent.selectOptions(select, "value"); // Select dropdown
await userEvent.hover(element); // Hover over element
```

### @testing-library/jest-dom

**Custom matchers** - Extends expect() with DOM-specific assertions

**Common Matchers:**

```typescript
expect(element).toBeInTheDocument(); // Element exists in DOM
expect(element).toBeVisible(); // Element is visible
expect(element).toHaveTextContent("text"); // Element contains text
expect(element).toHaveValue("value"); // Input has value
expect(element).toBeDisabled(); // Element is disabled
expect(element).toHaveClass("classname"); // Element has CSS class
```

---

## Setup & Installation

### Step 1: Install Dependencies

```bash
cd /path/to/your/project

# Install testing libraries
npm install -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom

# Verify installation
npm list vitest
```

**Package Purposes:**

- `vitest` - Test runner
- `@testing-library/react` - Render React components in tests
- `@testing-library/jest-dom` - Custom DOM matchers
- `@testing-library/user-event` - Simulate user interactions
- `jsdom` - Browser environment simulation for Node.js

### Step 2: Configure Vitest

**Create `vitest.config.ts`:**

```typescript
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
    css: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

**Configuration Explained:**

- `globals: true` - Use `describe`, `it`, `expect` without importing
- `environment: "jsdom"` - Simulate browser DOM in Node.js
- `setupFiles` - Run setup file before each test
- `css: true` - Enable CSS imports in tests

### Step 3: Create Setup File

**Create `src/test/setup.ts`:**

```typescript
import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";

// Extend Vitest's expect with jest-dom matchers
expect.extend(matchers);

// Clean up after each test
afterEach(() => {
  cleanup();
});
```

**What this does:**

- Enables `toBeInTheDocument()` and other jest-dom matchers
- Automatically cleans up rendered components after each test

### Step 4: Add TypeScript Types (Optional)

**Create `src/test/types.d.ts`:**

```typescript
import type { TestingLibraryMatchers } from "@testing-library/jest-dom/matchers";

declare module "vitest" {
  interface Assertion<T = any>
    extends jest.Matchers<void>,
      TestingLibraryMatchers<T, void> {}
}
```

### Step 5: Add Test Script to package.json

```json
{
  "scripts": {
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest --coverage"
  }
}
```

### Step 6: Verify Setup

**Create `src/test/setup.test.ts`:**

```typescript
import { describe, it, expect } from "vitest";

describe("Test Setup", () => {
  it("should run basic test", () => {
    expect(1 + 1).toBe(2);
  });

  it("should have jest-dom matchers", () => {
    const div = document.createElement("div");
    div.textContent = "Hello";
    expect(div).toHaveTextContent("Hello");
  });
});
```

**Run tests:**

```bash
npm test
```

**Expected output:**

```
✓ Test Setup (2)
  ✓ should run basic test
  ✓ should have jest-dom matchers

Test Files  1 passed (1)
     Tests  2 passed (2)
```

---

## Testing Fundamentals

### Test Structure

**Basic test anatomy:**

```typescript
describe("ComponentName", () => {
  it("should do something", () => {
    // Test code here
  });
});
```

**Keywords:**

- `describe(name, fn)` - Group related tests (test suite)
- `it(name, fn)` or `test(name, fn)` - Individual test case
- `expect(value).toBe(expected)` - Assertion

### Writing Your First Test

**Component to test:**

```typescript
// TaskCard.tsx
interface TaskCardProps {
  title: string;
  description: string;
  onClick: () => void;
}

export function TaskCard({ title, description, onClick }: TaskCardProps) {
  return (
    <div onClick={onClick} className="task-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
```

**Test file:**

```typescript
// TaskCard.test.tsx
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TaskCard } from "./TaskCard";

describe("TaskCard", () => {
  it("renders task title", () => {
    render(
      <TaskCard
        title="Test Task"
        description="Description"
        onClick={() => {}}
      />
    );

    expect(screen.getByText("Test Task")).toBeInTheDocument();
  });

  it("renders task description", () => {
    render(
      <TaskCard
        title="Test Task"
        description="Test Description"
        onClick={() => {}}
      />
    );

    expect(screen.getByText("Test Description")).toBeInTheDocument();
  });

  it("calls onClick when clicked", async () => {
    const mockOnClick = vi.fn();
    render(
      <TaskCard
        title="Test Task"
        description="Description"
        onClick={mockOnClick}
      />
    );

    await userEvent.click(screen.getByText("Test Task"));

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
```

---

## The AAA Pattern

**Arrange-Act-Assert** - Standard pattern for structuring tests

### Arrange (Setup)

Prepare the test environment and data

```typescript
// Set up test data
const mockTask = {
  id: "1",
  title: "Test Task",
  description: "Test Description",
  column: "todo" as const,
};

// Set up mocks
const mockOnClick = vi.fn();

// Render component
render(<TaskCard task={mockTask} onClick={mockOnClick} />);
```

### Act (Execute)

Perform the action you want to test

```typescript
// User clicks button
await userEvent.click(screen.getByRole("button", { name: "Delete" }));

// User types in input
await userEvent.type(screen.getByLabelText("Title"), "New Task");

// User submits form
await userEvent.click(screen.getByRole("button", { name: "Save" }));
```

### Assert (Verify)

Check that the expected outcome occurred

```typescript
// Element should exist
expect(screen.getByText("Task saved")).toBeInTheDocument();

// Function should be called
expect(mockOnSave).toHaveBeenCalledWith({ title: "New Task" });

// Element should have attribute
expect(screen.getByRole("button")).toBeDisabled();
```

### Complete AAA Example

```typescript
it("should create new task when form is submitted", async () => {
  // ARRANGE - Set up component and mocks
  const mockOnSave = vi.fn();
  render(<TaskModal isOpen={true} onSave={mockOnSave} onClose={() => {}} />);

  // ACT - User fills and submits form
  await userEvent.type(screen.getByLabelText("Title"), "New Task");
  await userEvent.type(screen.getByLabelText("Description"), "Task details");
  await userEvent.click(screen.getByRole("button", { name: "Save" }));

  // ASSERT - Check expected outcome
  expect(mockOnSave).toHaveBeenCalledWith({
    title: "New Task",
    description: "Task details",
    column: "todo",
  });
});
```

---

## React Testing Library Basics

### Rendering Components

```typescript
import { render, screen } from "@testing-library/react";

// Basic render
render(<TaskCard title="Test" />);

// Render with props
render(<TaskCard title="Test" description="Description" onClick={() => {}} />);

// Render with wrapper (for context providers)
render(
  <ThemeProvider>
    <TaskCard title="Test" />
  </ThemeProvider>
);
```

### The `screen` Object

**Central access point for querying rendered elements**

```typescript
// Get element (throws error if not found)
const button = screen.getByRole("button");

// Query element (returns null if not found)
const button = screen.queryByRole("button");

// Find element (waits for element, async)
const button = await screen.findByRole("button");

// Get all matching elements
const buttons = screen.getAllByRole("button");
```

---

## Querying Elements

### Query Priority (Use in this order)

**1. Accessible Queries (Best)**

```typescript
// By role (most preferred - tests accessibility)
screen.getByRole("button", { name: "Save" });
screen.getByRole("heading", { level: 1 });
screen.getByRole("textbox", { name: "Username" });

// By label text (for form inputs)
screen.getByLabelText("Email address");

// By placeholder text
screen.getByPlaceholderText("Enter email...");

// By text content
screen.getByText("Welcome!");
screen.getByText(/hello/i); // Case-insensitive regex
```

**2. Semantic Queries**

```typescript
// By alt text (for images)
screen.getByAltText("Profile picture");

// By title attribute
screen.getByTitle("Close dialog");

// By display value (for inputs with value)
screen.getByDisplayValue("john@example.com");
```

**3. Test ID (Last Resort)**

```typescript
// By test ID (avoid if possible - not user-facing)
screen.getByTestId("custom-element")

// Add to component:
<div data-testid="custom-element">Content</div>
```

### Query Variants

**Three types for each query:**

```typescript
// getBy* - Returns element, throws error if not found
const button = screen.getByRole("button");

// queryBy* - Returns element or null, no error
const button = screen.queryByRole("button");
if (button === null) {
  // Element doesn't exist (good for negative tests)
}

// findBy* - Returns promise, waits for element (async)
const button = await screen.findByRole("button"); // Waits up to 1 second
```

**When to use each:**

- `getBy*` - Element should be present immediately
- `queryBy*` - Testing element does NOT exist
- `findBy*` - Element appears after async operation

### Multiple Elements

```typescript
// Get all matching elements
const buttons = screen.getAllByRole("button");
expect(buttons).toHaveLength(3);

// Query all (returns empty array if none found)
const buttons = screen.queryAllByRole("button");

// Find all (async)
const buttons = await screen.findAllByRole("button");
```

### Query Examples

```typescript
// Buttons
screen.getByRole("button", { name: "Submit" });
screen.getByRole("button", { name: /submit/i }); // Case-insensitive

// Headings
screen.getByRole("heading", { name: "Task List" });
screen.getByRole("heading", { level: 1 });

// Links
screen.getByRole("link", { name: "Learn more" });

// Text inputs
screen.getByRole("textbox", { name: "Email" });
screen.getByLabelText("Email"); // Also works

// Checkboxes
screen.getByRole("checkbox", { name: "Remember me" });

// Select dropdowns
screen.getByRole("combobox", { name: "Status" });

// Lists
screen.getByRole("list");
screen.getAllByRole("listitem");

// Images
screen.getByAltText("User avatar");

// Text content (flexible)
screen.getByText("Welcome back!");
screen.getByText(/welcome/i); // Case-insensitive
screen.getByText((content, element) => content.includes("Welcome"));
```

---

## User Interactions

### Clicking

```typescript
import userEvent from "@testing-library/user-event";

// Click button
const button = screen.getByRole("button", { name: "Save" });
await userEvent.click(button);

// Double click
await userEvent.dblClick(button);

// Right click
await userEvent.pointer({ target: button, keys: "[MouseRight]" });
```

### Typing

```typescript
// Type into input
const input = screen.getByLabelText("Title");
await userEvent.type(input, "New Task");

// Clear input
await userEvent.clear(input);

// Type slowly (realistic)
await userEvent.type(input, "New Task", { delay: 100 });

// Type with special keys
await userEvent.type(input, "Hello{Enter}");
await userEvent.type(input, "{Backspace}");
await userEvent.type(input, "{Shift>}hello{/Shift}"); // Types "HELLO"
```

### Forms

```typescript
// Fill text input
await userEvent.type(screen.getByLabelText("Email"), "test@example.com");

// Select dropdown option
await userEvent.selectOptions(screen.getByLabelText("Status"), "completed");

// Check checkbox
await userEvent.click(screen.getByRole("checkbox", { name: "Agree" }));

// Upload file
const file = new File(["content"], "test.png", { type: "image/png" });
const input = screen.getByLabelText("Upload image");
await userEvent.upload(input, file);

// Submit form
await userEvent.click(screen.getByRole("button", { name: "Submit" }));
```

### Keyboard Interactions

```typescript
// Press Enter
await userEvent.keyboard("{Enter}");

// Press Tab
await userEvent.keyboard("{Tab}");

// Press Escape
await userEvent.keyboard("{Escape}");

// Keyboard shortcuts
await userEvent.keyboard("{Control>}S{/Control}"); // Ctrl+S
await userEvent.keyboard("{Meta>}S{/Meta}"); // Cmd+S (Mac)
```

### Hover and Focus

```typescript
// Hover over element
await userEvent.hover(screen.getByText("Tooltip trigger"));

// Unhover
await userEvent.unhover(screen.getByText("Tooltip trigger"));

// Focus element
const input = screen.getByLabelText("Email");
await userEvent.click(input); // Also focuses
// or
input.focus(); // Direct focus (not recommended)

// Tab to next element
await userEvent.tab();
```

---

## Testing Patterns by Component Type

### 1. Presentational Components (Easiest)

**Pure display components with no state**

```typescript
// TaskCard.tsx
export function TaskCard({ title, description, onClick }) {
  return (
    <div onClick={onClick}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

// TaskCard.test.tsx
describe("TaskCard", () => {
  const mockTask = {
    title: "Test Task",
    description: "Test Description",
  };

  it("renders title and description", () => {
    render(<TaskCard {...mockTask} onClick={() => {}} />);

    expect(screen.getByText("Test Task")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
  });

  it("calls onClick when clicked", async () => {
    const mockOnClick = vi.fn();
    render(<TaskCard {...mockTask} onClick={mockOnClick} />);

    await userEvent.click(screen.getByText("Test Task"));

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
```

### 2. Form Components (Intermediate)

**Components with inputs and form handling**

```typescript
// TaskModal.tsx
export function TaskModal({ isOpen, task, onSave, onClose }) {
  const [title, setTitle] = useState(task?.title || "");
  const [description, setDescription] = useState(task?.description || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ title, description, column: task?.column || "todo" });
  };

  if (!isOpen) return null;

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        aria-label="Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        aria-label="Description"
      />
      <button type="submit">Save</button>
      <button type="button" onClick={onClose}>
        Cancel
      </button>
    </form>
  );
}

// TaskModal.test.tsx
describe("TaskModal", () => {
  it("renders form when open", () => {
    render(<TaskModal isOpen={true} onSave={() => {}} onClose={() => {}} />);

    expect(screen.getByLabelText("Title")).toBeInTheDocument();
    expect(screen.getByLabelText("Description")).toBeInTheDocument();
  });

  it("does not render when closed", () => {
    render(<TaskModal isOpen={false} onSave={() => {}} onClose={() => {}} />);

    expect(screen.queryByLabelText("Title")).not.toBeInTheDocument();
  });

  it("calls onSave with form data when submitted", async () => {
    const mockOnSave = vi.fn();
    render(<TaskModal isOpen={true} onSave={mockOnSave} onClose={() => {}} />);

    await userEvent.type(screen.getByLabelText("Title"), "New Task");
    await userEvent.type(screen.getByLabelText("Description"), "Details");
    await userEvent.click(screen.getByRole("button", { name: "Save" }));

    expect(mockOnSave).toHaveBeenCalledWith({
      title: "New Task",
      description: "Details",
      column: "todo",
    });
  });

  it("pre-fills form when editing existing task", () => {
    const task = { title: "Existing", description: "Task", column: "todo" };
    render(
      <TaskModal
        isOpen={true}
        task={task}
        onSave={() => {}}
        onClose={() => {}}
      />
    );

    expect(screen.getByLabelText("Title")).toHaveValue("Existing");
    expect(screen.getByLabelText("Description")).toHaveValue("Task");
  });
});
```

### 3. Components with State (Advanced)

**Components managing local state**

```typescript
// Counter.tsx
export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

// Counter.test.tsx
describe("Counter", () => {
  it("starts at 0", () => {
    render(<Counter />);
    expect(screen.getByText("Count: 0")).toBeInTheDocument();
  });

  it("increments count when increment clicked", async () => {
    render(<Counter />);

    await userEvent.click(screen.getByRole("button", { name: "Increment" }));

    expect(screen.getByText("Count: 1")).toBeInTheDocument();
  });

  it("decrements count when decrement clicked", async () => {
    render(<Counter />);

    await userEvent.click(screen.getByRole("button", { name: "Increment" }));
    await userEvent.click(screen.getByRole("button", { name: "Decrement" }));

    expect(screen.getByText("Count: 0")).toBeInTheDocument();
  });

  it("resets count to 0", async () => {
    render(<Counter />);

    await userEvent.click(screen.getByRole("button", { name: "Increment" }));
    await userEvent.click(screen.getByRole("button", { name: "Increment" }));
    await userEvent.click(screen.getByRole("button", { name: "Reset" }));

    expect(screen.getByText("Count: 0")).toBeInTheDocument();
  });
});
```

### 4. Container Components (Most Complex)

**Components orchestrating multiple child components**

```typescript
// Board.tsx
export function Board() {
  const tasks = useBoardStore((state) => state.tasks);
  const columns = ["todo", "inProgress", "done"];

  return (
    <div>
      {columns.map((column) => (
        <Column
          key={column}
          id={column}
          tasks={tasks.filter((t) => t.column === column)}
        />
      ))}
    </div>
  );
}

// Board.test.tsx
describe("Board", () => {
  it("renders all three columns", () => {
    render(<Board />);

    expect(screen.getByText("To Do")).toBeInTheDocument();
    expect(screen.getByText("In Progress")).toBeInTheDocument();
    expect(screen.getByText("Done")).toBeInTheDocument();
  });

  it("renders tasks in correct columns", () => {
    // Set up store with test data
    const { result } = renderHook(() => useBoardStore());
    act(() => {
      result.current.addTask({ title: "Todo task", column: "todo" });
      result.current.addTask({ title: "Done task", column: "done" });
    });

    render(<Board />);

    // Verify tasks appear in correct columns
    const todoColumn = screen.getByText("To Do").closest("div");
    const doneColumn = screen.getByText("Done").closest("div");

    expect(within(todoColumn).getByText("Todo task")).toBeInTheDocument();
    expect(within(doneColumn).getByText("Done task")).toBeInTheDocument();
  });
});
```

---

## Mocking

### Why Mock?

**Isolation** - Test component without dependencies  
**Control** - Simulate different scenarios  
**Speed** - Avoid slow operations (API calls, timers)

### Mock Functions (vi.fn())

```typescript
import { vi } from "vitest";

// Create mock function
const mockOnClick = vi.fn();

// Use in component
render(<Button onClick={mockOnClick}>Click me</Button>);
await userEvent.click(screen.getByRole("button"));

// Assert it was called
expect(mockOnClick).toHaveBeenCalledTimes(1);
expect(mockOnClick).toHaveBeenCalledWith(expectedArg);

// Mock return value
const mockGetUser = vi.fn(() => ({ id: 1, name: "John" }));

// Mock resolved promise
const mockFetchUser = vi.fn(() => Promise.resolve({ id: 1, name: "John" }));

// Mock rejected promise
const mockFetchUser = vi.fn(() => Promise.reject(new Error("Failed")));
```

### Mock Modules

```typescript
// Mock entire module
vi.mock("@/lib/api", () => ({
  fetchTasks: vi.fn(() => Promise.resolve([])),
  createTask: vi.fn(),
}));

// Use in test
import { fetchTasks } from "@/lib/api";

it("fetches tasks on mount", async () => {
  (fetchTasks as any).mockResolvedValueOnce([{ id: 1, title: "Task" }]);

  render(<TaskList />);

  await waitFor(() => {
    expect(screen.getByText("Task")).toBeInTheDocument();
  });
});
```

### Mock Third-Party Libraries

```typescript
// Mock @dnd-kit for drag-and-drop testing
vi.mock("@dnd-kit/sortable", () => ({
  SortableContext: ({ children }: any) => children,
  useSortable: () => ({
    attributes: {},
    listeners: {},
    setNodeRef: () => {},
    transform: null,
    transition: null,
    isDragging: false,
  }),
}));

// Mock zustand store
vi.mock("@/stores/boardStore", () => ({
  useBoardStore: vi.fn(() => ({
    tasks: [],
    addTask: vi.fn(),
    updateTask: vi.fn(),
    deleteTask: vi.fn(),
  })),
}));
```

### Mock Local Storage

```typescript
beforeEach(() => {
  // Mock localStorage
  const localStorageMock = {
    getItem: vi.fn(),
    setItem: vi.fn(),
    removeItem: vi.fn(),
    clear: vi.fn(),
  };
  global.localStorage = localStorageMock as any;
});

it("saves tasks to localStorage", () => {
  render(<TaskBoard />);

  // Trigger save
  // ...

  expect(localStorage.setItem).toHaveBeenCalledWith(
    "tasks",
    JSON.stringify([...])
  );
});
```

### Mock Timers

```typescript
import { vi } from "vitest";

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  vi.useRealTimers();
});

it("shows message after delay", () => {
  render(<DelayedMessage />);

  // Message not visible yet
  expect(screen.queryByText("Hello")).not.toBeInTheDocument();

  // Fast-forward time
  vi.advanceTimersByTime(1000);

  // Message now visible
  expect(screen.getByText("Hello")).toBeInTheDocument();
});
```

---

## Testing State Management

### Testing Zustand Stores

```typescript
import { renderHook, act } from "@testing-library/react";
import { useBoardStore } from "./boardStore";

describe("boardStore", () => {
  beforeEach(() => {
    // Reset store before each test
    useBoardStore.setState({ tasks: [] });
  });

  it("adds a task", () => {
    const { result } = renderHook(() => useBoardStore());

    act(() => {
      result.current.addTask({
        title: "New Task",
        description: "Description",
        column: "todo",
      });
    });

    expect(result.current.tasks).toHaveLength(1);
    expect(result.current.tasks[0].title).toBe("New Task");
  });

  it("updates a task", () => {
    const { result } = renderHook(() => useBoardStore());

    // Add task
    act(() => {
      result.current.addTask({ title: "Task", column: "todo" });
    });

    const taskId = result.current.tasks[0].id;

    // Update task
    act(() => {
      result.current.updateTask(taskId, { title: "Updated Task" });
    });

    expect(result.current.tasks[0].title).toBe("Updated Task");
  });

  it("deletes a task", () => {
    const { result } = renderHook(() => useBoardStore());

    // Add task
    act(() => {
      result.current.addTask({ title: "Task", column: "todo" });
    });

    const taskId = result.current.tasks[0].id;

    // Delete task
    act(() => {
      result.current.deleteTask(taskId);
    });

    expect(result.current.tasks).toHaveLength(0);
  });

  it("moves task to different column", () => {
    const { result } = renderHook(() => useBoardStore());

    // Add task
    act(() => {
      result.current.addTask({ title: "Task", column: "todo" });
    });

    const taskId = result.current.tasks[0].id;

    // Move task
    act(() => {
      result.current.moveTask(taskId, "done");
    });

    expect(result.current.tasks[0].column).toBe("done");
  });

  it("filters tasks by column", () => {
    const { result } = renderHook(() => useBoardStore());

    // Add tasks
    act(() => {
      result.current.addTask({ title: "Todo 1", column: "todo" });
      result.current.addTask({ title: "Done 1", column: "done" });
      result.current.addTask({ title: "Todo 2", column: "todo" });
    });

    const todoTasks = result.current.getTasksByColumn("todo");
    const doneTasks = result.current.getTasksByColumn("done");

    expect(todoTasks).toHaveLength(2);
    expect(doneTasks).toHaveLength(1);
  });
});
```

---

## Common Testing Mistakes

### 1. Testing Implementation Details

**❌ BAD - Tests internal state:**

```typescript
it("sets isOpen state to true", () => {
  const { result } = renderHook(() => useModal());
  act(() => result.current.open());

  expect(result.current.isOpen).toBe(true); // Testing internal state
});
```

**✅ GOOD - Tests user-visible behavior:**

```typescript
it("shows modal when open button is clicked", async () => {
  render(<Modal />);

  await userEvent.click(screen.getByRole("button", { name: "Open" }));

  expect(screen.getByRole("dialog")).toBeInTheDocument(); // User sees modal
});
```

### 2. Not Waiting for Async Updates

**❌ BAD - Doesn't wait for state update:**

```typescript
it("displays fetched data", () => {
  render(<UserProfile userId={1} />);

  expect(screen.getByText("John Doe")).toBeInTheDocument(); // Fails!
});
```

**✅ GOOD - Waits for async operation:**

```typescript
it("displays fetched data", async () => {
  render(<UserProfile userId={1} />);

  // Wait for data to load
  await waitFor(() => {
    expect(screen.getByText("John Doe")).toBeInTheDocument();
  });
});

// Or use findBy (built-in waiting)
it("displays fetched data", async () => {
  render(<UserProfile userId={1} />);

  expect(await screen.findByText("John Doe")).toBeInTheDocument();
});
```

### 3. Using Wrong Query Method

**❌ BAD - Using getBy for element that doesn't exist:**

```typescript
it("does not show modal initially", () => {
  render(<App />);

  expect(screen.getByRole("dialog")).not.toBeInTheDocument(); // Throws error!
});
```

**✅ GOOD - Use queryBy for negative assertions:**

```typescript
it("does not show modal initially", () => {
  render(<App />);

  expect(screen.queryByRole("dialog")).not.toBeInTheDocument(); // Returns null
});
```

### 4. Not Using userEvent

**❌ BAD - Using fireEvent (less realistic):**

```typescript
fireEvent.click(button);
fireEvent.change(input, { target: { value: "text" } });
```

**✅ GOOD - Use userEvent (more realistic):**

```typescript
await userEvent.click(button);
await userEvent.type(input, "text");
```

### 5. Over-Mocking

**❌ BAD - Mocking everything:**

```typescript
vi.mock("./TaskCard");
vi.mock("./Column");
vi.mock("@dnd-kit/core");
vi.mock("react"); // Don't mock React!

it("renders board", () => {
  // Now testing nothing useful
});
```

**✅ GOOD - Mock only external dependencies:**

```typescript
vi.mock("@/lib/api"); // Mock API calls
// Test real components

it("renders board with tasks", async () => {
  render(<Board />);
  // Tests actual rendering and integration
});
```

---

## Best Practices

### 1. Test User Behavior, Not Implementation

```typescript
// ✅ GOOD - Tests what user experiences
it("allows user to create a task", async () => {
  render(<TaskBoard />);

  await userEvent.click(screen.getByRole("button", { name: "Add Task" }));
  await userEvent.type(screen.getByLabelText("Title"), "New Task");
  await userEvent.click(screen.getByRole("button", { name: "Save" }));

  expect(screen.getByText("New Task")).toBeInTheDocument();
});

// ❌ BAD - Tests internal details
it("calls addTask function", () => {
  const mockAddTask = vi.fn();
  render(<TaskBoard addTask={mockAddTask} />);

  // Testing prop injection instead of user behavior
});
```

### 2. Use Descriptive Test Names

```typescript
// ✅ GOOD - Clear what's being tested
it("displays error message when title is empty", () => {});
it("disables submit button while form is submitting", () => {});
it("filters tasks by status when dropdown is changed", () => {});

// ❌ BAD - Vague test names
it("works correctly", () => {});
it("handles click", () => {});
it("test 1", () => {});
```

### 3. Keep Tests Independent

```typescript
// ✅ GOOD - Each test is independent
describe("TaskList", () => {
  it("renders empty state", () => {
    render(<TaskList tasks={[]} />);
    // ...
  });

  it("renders list of tasks", () => {
    const tasks = [{ id: 1, title: "Task" }];
    render(<TaskList tasks={tasks} />);
    // ...
  });
});

// ❌ BAD - Tests depend on each other
describe("TaskList", () => {
  let wrapper;

  it("renders component", () => {
    wrapper = render(<TaskList />); // Bad: shared state
  });

  it("shows tasks", () => {
    // Depends on previous test
  });
});
```

### 4. Use Setup Functions

```typescript
describe("TaskModal", () => {
  // Helper function for common setup
  function renderModal(props = {}) {
    const defaultProps = {
      isOpen: true,
      onSave: vi.fn(),
      onClose: vi.fn(),
    };
    return render(<TaskModal {...defaultProps} {...props} />);
  }

  it("renders form", () => {
    renderModal();
    expect(screen.getByLabelText("Title")).toBeInTheDocument();
  });

  it("renders with task data", () => {
    renderModal({ task: { title: "Existing", description: "Task" } });
    expect(screen.getByLabelText("Title")).toHaveValue("Existing");
  });
});
```

### 5. Test Edge Cases

```typescript
describe("TaskCard", () => {
  // Happy path
  it("renders with all data", () => {});

  // Edge cases
  it("renders without description", () => {});
  it("handles very long titles", () => {});
  it("handles special characters in title", () => {});
  it("renders with empty string title", () => {});
});
```

### 6. Avoid Testing Third-Party Code

```typescript
// ❌ BAD - Testing React's useState
it("updates state when setState is called", () => {
  // React is already tested
});

// ✅ GOOD - Test your component's behavior
it("displays updated count when increment is clicked", () => {
  // Tests your component using React
});
```

### 7. Clean Up After Tests

```typescript
// Automatically done by setup.ts
afterEach(() => {
  cleanup(); // Clears rendered components
});

// Manual cleanup for other resources
afterEach(() => {
  vi.clearAllMocks(); // Clear mock call history
  localStorage.clear(); // Clear localStorage
});
```

---

## Debugging Tests

### Use screen.debug()

```typescript
it("renders task", () => {
  render(<TaskCard title="Test" />);

  // Print entire DOM
  screen.debug();

  // Print specific element
  screen.debug(screen.getByText("Test"));

  // Print with more lines
  screen.debug(undefined, 20000);
});
```

**Output:**

```html
<body>
  <div>
    <div class="task-card">
      <h3>Test</h3>
    </div>
  </div>
</body>
```

### Use logRoles()

```typescript
import { logRoles } from "@testing-library/react";

it("renders buttons", () => {
  const { container } = render(<TaskModal />);

  // Shows all accessible roles
  logRoles(container);
});
```

**Output:**

```
button:
  Name "Save":
    <button type="submit">Save</button>
  Name "Cancel":
    <button type="button">Cancel</button>
```

### Check What Queries Are Available

```typescript
it("finds button", () => {
  render(<TaskModal />);

  // This fails but shows helpful suggestions
  screen.getByRole("btn"); // Error: Unable to find role="btn"
  // Suggestion: Did you mean role="button"?
  //
  // Available roles:
  //   button: Name "Save", Name "Cancel"
  //   textbox: Name "Title", Name "Description"
});
```

### Use Testing Playground

```typescript
it("renders form", () => {
  const { container } = render(<TaskModal />);

  // Copy this URL and open in browser
  screen.logTestingPlaygroundURL();
});
```

Opens browser tool showing best query to use for each element.

### Watch Mode for Faster Debugging

```bash
# Re-runs tests on file changes
npm test -- --watch

# Run specific test file
npm test TaskCard

# Run tests matching pattern
npm test "adds task"
```

### VSCode Debugging

**Add to `.vscode/launch.json`:**

```json
{
  "type": "node",
  "request": "launch",
  "name": "Debug Tests",
  "runtimeExecutable": "npm",
  "runtimeArgs": ["test"],
  "console": "integratedTerminal",
  "internalConsoleOptions": "neverOpen"
}
```

Set breakpoints in test files and press F5 to debug.

---

## Quick Reference Cheat Sheet

```typescript
// RENDER
import { render, screen } from "@testing-library/react";
render(<Component />);

// QUERIES
screen.getByRole("button", { name: "Save" }); // Throws if not found
screen.queryByRole("button", { name: "Save" }); // Returns null if not found
await screen.findByRole("button", { name: "Save" }); // Async, waits for element

// USER EVENTS
import userEvent from "@testing-library/user-event";
await userEvent.click(element);
await userEvent.type(input, "text");
await userEvent.clear(input);
await userEvent.selectOptions(select, "value");

// ASSERTIONS
expect(element).toBeInTheDocument();
expect(element).toHaveTextContent("text");
expect(element).toHaveValue("value");
expect(element).toBeVisible();
expect(element).toBeDisabled();
expect(mockFn).toHaveBeenCalledTimes(1);
expect(mockFn).toHaveBeenCalledWith(arg);

// MOCKING
const mockFn = vi.fn();
const mockFn = vi.fn(() => "return value");
const mockFn = vi.fn(() => Promise.resolve(data));
vi.mock("@/lib/api");

// ASYNC
await waitFor(() => {
  expect(screen.getByText("Loaded")).toBeInTheDocument();
});

// DEBUGGING
screen.debug();
screen.logTestingPlaygroundURL();
```

---

## Coverage Goals

**Target coverage percentages:**

- **60-70%** - Good starting point
- **70-80%** - Professional standard
- **80%+** - Excellent coverage

**Check coverage:**

```bash
npm test -- --coverage
```

**Focus on:**

- Critical user flows (authentication, checkout, etc.)
- Complex business logic
- Error handling
- Edge cases

**Don't obsess over:**

- 100% coverage (diminishing returns)
- Third-party code
- Simple getters/setters
- Configuration files

---

## Next Steps

**To learn more:**

1. **Testing Library Docs**: https://testing-library.com/docs/react-testing-library/intro
2. **Common Mistakes**: https://kentcdodds.com/blog/common-mistakes-with-react-testing-library
3. **Testing Best Practices**: https://testingjavascript.com/
4. **Vitest Docs**: https://vitest.dev/

**Advanced Topics:**

- Integration testing with MSW (Mock Service Worker)
- E2E testing with Playwright/Cypress
- Visual regression testing
- Performance testing
- Accessibility testing

---

**Created:** January 21, 2026  
**Project:** kanban-next testing implementation  
**Purpose:** Personal reference for React testing best practices
