'use client'

// stores/boardStore.ts

/**
 * Zustand store for managing Kanban board state
 * Handles tasks, columns, and all CRUD operations
 */

import { create } from "zustand";
import { Task, Column, ColumnId } from "@/types";
import { loadTasks, saveTasks } from "@/utils/storage";

interface BoardStore {
  // State
  tasks: Task[];
  columns: Column[];

  // Actions
  addTask: (title: string, description: string, columnId: ColumnId) => void;
  updateTask: (id: string, title: string, description: string) => void;
  deleteTask: (id: string) => void;
  moveTask: (taskId: string, newColumnId: ColumnId) => void;

  // Utilities
  getTasksByColumn: (columnId: ColumnId) => Task[];
  initializeTasks: () => void;
}

// Default columns configuration
const defaultColumns: Column[] = [
  { id: "todo", title: "To Do" },
  { id: "inProgress", title: "In Progress" },
  { id: "done", title: "Done" },
];

// Sample initial tasks
const sampleTasks: Task[] = [
  {
    id: "1",
    title: "Welcome to Kanban Board!",
    description: "Drag this card to move it between columns",
    column: "todo",
    createdAt: Date.now(),
  },
  {
    id: "2",
    title: "Click a card to edit",
    description: "You can edit or delete any task",
    column: "todo",
    createdAt: Date.now(),
  },
  {
    id: "3",
    title: "Add new tasks",
    description: 'Click the "+ Add Task" button in any column',
    column: "inProgress",
    createdAt: Date.now(),
  },
];

export const useBoardStore = create<BoardStore>((set, get) => ({
  // Initial state
  tasks: loadTasks() || sampleTasks,
  columns: defaultColumns,

  // Initialize tasks from localStorage or use samples
  initializeTasks: () => {
    const storedTasks = loadTasks();
    if (storedTasks) {
      set({ tasks: storedTasks });
    }
  },

  // Create a new task
  addTask: (title, description, columnId) => {
    const newTask: Task = {
      id: `task-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      title,
      description,
      column: columnId,
      createdAt: Date.now(),
    };

    set((state) => {
      const newTasks = [...state.tasks, newTask];
      saveTasks(newTasks);
      return { tasks: newTasks };
    });
  },

  // Update an existing task
  updateTask: (id, title, description) => {
    set((state) => {
      const newTasks = state.tasks.map((task) =>
        task.id === id ? { ...task, title, description } : task
      );
      saveTasks(newTasks);
      return { tasks: newTasks };
    });
  },

  // Delete a task
  deleteTask: (id) => {
    set((state) => {
      const newTasks = state.tasks.filter((task) => task.id !== id);
      saveTasks(newTasks);
      return { tasks: newTasks };
    });
  },

  // Move a task to a different column (drag-and-drop)
  moveTask: (taskId, newColumnId) => {
    set((state) => {
      const newTasks = state.tasks.map((task) =>
        task.id === taskId ? { ...task, column: newColumnId } : task
      );
      saveTasks(newTasks);
      return { tasks: newTasks };
    });
  },

  // Get all tasks for a specific column
  getTasksByColumn: (columnId) => {
    return get().tasks.filter((task) => task.column === columnId);
  },
}));
