// src/components/Board.tsx

/**
 * Main board component with drag-and-drop functionality
 */

import React, { useEffect } from "react";
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { useBoardStore } from "../stores/boardStore";
import { Column } from "./Column";
import { TaskCard } from "./TaskCard";
import { Task, ColumnId } from "../types";

export function Board() {
  const tasks = useBoardStore((state) => state.tasks);
  const columns = useBoardStore((state) => state.columns);
  const getTasksByColumn = useBoardStore((state) => state.getTasksByColumn);
  const moveTask = useBoardStore((state) => state.moveTask);
  const initializeTasks = useBoardStore((state) => state.initializeTasks);

  const [activeTask, setActiveTask] = React.useState<Task | null>(null);

  // Initialize tasks from localStorage on mount
  useEffect(() => {
    initializeTasks();
  }, [initializeTasks]);

  // Configure drag sensors (mouse and touch)
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8, // Require 8px of movement before drag starts
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 200, // 200ms delay for touch devices
        tolerance: 8,
      },
    })
  );

  // Handle drag start
  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    const taskId = active.id as string;

    // Find the task being dragged
    const allTasks = columns.flatMap((col) => getTasksByColumn(col.id));
    const task = allTasks.find((t) => t.id === taskId);

    if (task) {
      setActiveTask(task);
    }
  };

  // Handle drag end
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveTask(null);

    if (!over) return;

    const taskId = active.id as string;
    const newColumnId = over.id as ColumnId;

    // Move the task to the new column
    moveTask(taskId, newColumnId);
  };

  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {columns.map((column) => (
          <Column
            key={column.id}
            column={column}
            tasks={getTasksByColumn(column.id)}
          />
        ))}
      </div>

      {/* Drag Overlay - shows the task being dragged */}
      <DragOverlay>
        {activeTask ? (
          <div className="rotate-3">
            <TaskCard task={activeTask} onClick={() => {}} />
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}
