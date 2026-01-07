import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { TaskCard } from "../TaskCard";

describe("TaskCard Component", () => {
  it("displays the task title", () => {
    // ARRANGE: Create fake task data
    const mockTask = {
      id: "1",
      title: "Buy groceries",
      description: "Get milk and eggs",
      column: "todo" as const,
      createdAt: Date.now(),
    };

    // ACT: Render the component with fake data
    render(<TaskCard task={mockTask} onClick={() => {}} />);

    // ASSERT: Check if the title appears on screen
    expect(screen.getByText("Buy groceries")).toBeInTheDocument();
  });

  it("displays the task description", () => {
    // ARRANGE: Create fake data
    const mockTask = {
      id: "2",
      title: "Sell car",
      description: "Clean and list the car for sale",
      column: "todo" as const,
      createdAt: Date.now(),
    };

    // ACT: Render component
    render(<TaskCard task={mockTask} onClick={() => {}} />);

    // ASSERT: Check result - look for the DESCRIPTION this time
    expect(
      screen.getByText("Clean and list the car for sale")
    ).toBeInTheDocument();
  });

  it("calls onClick when the card is clicked", () => {
    // ARRANGE: Create fake task and mock onClick function
    const mockTask = {
      id: "3",
      title: "Test task",
      description: "Test description",
      column: "todo" as const,
      createdAt: Date.now(),
    };

    const mockOnClick = vi.fn(); // Create a mock function

    // ACT: Render the component
    render(<TaskCard task={mockTask} onClick={mockOnClick} />);

    // Get the card element and click it
    const card = screen
      .getByText("Test task")
      .closest('div[class*="cursor-pointer"]');

    if (card) {
      fireEvent.click(card);
    }

    // ASSERT: Check if onClick was called
    expect(mockOnClick).toHaveBeenCalled();
  });
});
