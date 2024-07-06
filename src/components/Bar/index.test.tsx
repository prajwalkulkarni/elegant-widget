import { render, screen } from "@testing-library/react";
import { Bar } from ".";
import React from "react";
import { describe, expect, test } from "vitest";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
describe("Test Bar component", () => {
  test("Render Bar component", () => {
    render(<Bar color="#000" height={50} amount={4000} />);

    expect(screen.getByTestId("bar")).toBeVisible();
  });

  test("Tooltip should be visible on hover", () => {
    render(<Bar color="#000" height={50} amount={2000} />);
    const bar = screen.getByTestId("bar");
    userEvent.hover(bar);
    expect(screen.getByTestId("tooltip")).toHaveStyle("visibility: visible");
  });
});
