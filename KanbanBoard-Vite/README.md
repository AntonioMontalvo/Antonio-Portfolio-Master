# 🎯 Project 6: Interactive Kanban Board

## **Overview**

A drag-and-drop task management system demonstrating complex state management, modern React patterns, and intuitive UI/UX design. Features real-time updates, persistent storage, and full CRUD operations.

## **Tech Stack**

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Drag & Drop**: @dnd-kit (core, sortable, utilities)
- **State Management**: Zustand
- **Icons**: Lucide React
- **Storage**: LocalStorage API

---

## **Features**

### ✅ Core Features

- **Drag-and-Drop**: Move tasks between columns (To Do, In Progress, Done)
- **CRUD Operations**: Create, Read, Update, Delete tasks
- **Persistent Storage**: Tasks saved to localStorage
- **Type-Safe**: Full TypeScript implementation
- **Responsive Design**: Mobile-friendly UI

### 🎨 UI/UX Features

- Clean, modern interface
- Smooth animations
- Visual feedback during drag operations
- Modal dialogs for task management
- Optimistic UI updates

---

## **Architecture**

### **Component Structure**

```
src/
├── components/
│   ├── Board.tsx          # Main board container with DnD context
│   ├── Column.tsx         # Individual column (To Do, In Progress, Done)
│   ├── TaskCard.tsx       # Draggable task card
│   └── TaskModal.tsx      # Modal for creating/editing tasks
├── stores/
│   └── boardStore.ts      # Zustand state management
├── types/
│   └── index.ts           # TypeScript interfaces
├── utils/
│   └── storage.ts         # LocalStorage utilities
├── App.tsx                # Root component
├── main.tsx               # Entry point
└── index.css              # Global styles with Tailwind
```

### **State Management**

Using Zustand for lightweight, intuitive state management:

- `tasks`: Array of all tasks
- `columns`: Column configuration (id, title, taskIds)
- `addTask()`: Create new task
- `updateTask()`: Edit existing task
- `deleteTask()`: Remove task
- `moveTask()`: Handle drag-and-drop operations

---

## **Key Implementation Details**

### **1. TypeScript Interfaces**

```typescript
interface Task {
  id: string;
  title: string;
  description: string;
  column: ColumnId;
  createdAt: number;
}

type ColumnId = "todo" | "inProgress" | "done";

interface Column {
  id: ColumnId;
  title: string;
}
```

### **2. Drag-and-Drop Logic**

- Uses `@dnd-kit` for collision detection and drag sensors
- Supports both mouse and touch interactions
- Handles intra-column and inter-column dragging
- Optimistic updates for smooth UX

### **3. Persistence Strategy**

- Auto-save to localStorage on every state change
- Load from localStorage on mount
- Fallback to default state if no saved data

---

## **Setup Instructions**

### **Installation**

```bash
npm install
```

### **Development**

```bash
npm run dev
```

Runs on http://localhost:5173

### **Build for Production**

```bash
npm run build
```

### **Preview Production Build**

```bash
npm run preview
```

---

## **Usage Guide**

### **Creating a Task**

1. Click the "+ Add Task" button in any column
2. Enter task title and description
3. Click "Create Task"

### **Moving a Task**

1. Click and hold on a task card
2. Drag to desired column
3. Release to drop

### **Editing a Task**

1. Click on a task card
2. Modify title or description
3. Click "Save Changes"

### **Deleting a Task**

1. Click on a task card
2. Click "Delete Task" button
3. Confirm deletion

---

## **Interview Talking Points**

### **Why dnd-kit over react-beautiful-dnd?**

- **Modern**: Active maintenance, better TypeScript support
- **Lightweight**: Smaller bundle size (~15KB vs ~30KB)
- **Flexible**: Better touch device support
- **Accessible**: Built-in keyboard navigation

### **Why Zustand over Redux?**

- **Simple**: Less boilerplate (~95% less code)
- **Fast**: No context provider, direct subscription
- **Flexible**: Can be used outside React
- **Type-safe**: Excellent TypeScript integration

### **Performance Optimizations**

1. **Memo-ization**: TaskCard uses React.memo to prevent unnecessary re-renders
2. **Optimistic Updates**: UI updates before localStorage save
3. **Debounced Saves**: Batch localStorage writes (if implemented)

### **State Management Pattern**

- **Single source of truth**: Zustand store
- **Immutable updates**: Spread operators for state changes
- **Derived state**: Column task lists computed from task array

---

## **Future Enhancements**

### **Phase 4 (Optional)**

- [ ] Backend Integration (Node.js + MongoDB)
- [ ] User Authentication (JWT)
- [ ] Multi-board Support
- [ ] Task Priorities & Labels
- [ ] Due Dates & Reminders
- [ ] Search & Filter Tasks
- [ ] Export to JSON/CSV
- [ ] Keyboard Shortcuts
- [ ] Dark Mode Toggle

---

## **Deployment**

### **Vercel (Recommended)**

```bash
# Push to GitHub
git add .
git commit -m "Initial Kanban board implementation"
git push origin main

# Deploy via Vercel dashboard
# Framework: Vite
# Build Command: npm run build
# Output Directory: dist
```

### **Environment Variables**

None required for basic deployment.

---

## **Learning Outcomes**

### **What This Project Demonstrates**

1. ✅ **Complex State Management**: Multi-level state with inter-dependencies
2. ✅ **Modern React Patterns**: Hooks, context, memoization
3. ✅ **TypeScript Proficiency**: Interfaces, generics, type guards
4. ✅ **Third-Party Integration**: dnd-kit, Zustand
5. ✅ **Persistence Layer**: LocalStorage with error handling
6. ✅ **UI/UX Design**: Drag feedback, loading states, animations
7. ✅ **Code Organization**: Clean architecture, separation of concerns

---

## **License**

MIT

---

## **Author**

Antonio Montalvo  
[GitHub](https://github.com/AntonioMontalvo) | [Portfolio](https://antonio-portfolio-master.vercel.app)
