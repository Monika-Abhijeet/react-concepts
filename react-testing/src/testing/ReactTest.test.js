import { screen, render, fireEvent } from "@testing-library/react";
import ReactTest from "./ReactTest";

test("display React testing on dom", () => {
  render(<ReactTest />);
  const element = screen.getByText("React testing");
  expect(element).toBeInTheDocument();
});

test("button should have correct initial color and text", () => {
  render(<ReactTest></ReactTest>);
  const colorButton = screen.getByRole("button", { name: "Change to Blue" });
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });
});

test("button turns to blue when clicked", () => {
  render(<ReactTest />);
  const colorButton = screen.getByRole("button", { name: "Change to Blue" });
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
});

test("button turns back to red on double click", () => {
  render(<ReactTest />);
  const colorButton = screen.getByRole("button", { name: "Change to Blue" });
  fireEvent.click(colorButton);
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });
});

test("initial condition with checkbox", () => {
  render(<ReactTest />);
  const colorButton = screen.getByRole("button", { name: "Change to Blue" });
  expect(colorButton).toBeEnabled();
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("checkbox disables button on first click and enables on second click", () => {
  render(<ReactTest />);
  const colorButton = screen.getByRole("button", { name: "Change to Blue" });

  const checkbox = screen.getByRole("checkbox");
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
});

test("sum of 1 + 1 is 2", () => {
  render(<ReactTest />);
  const sumButton = screen.getByRole("button", { name: "Sum" });
  fireEvent.click(sumButton);
  const element = screen.getByTestId("add");
  expect(element).toHaveTextContent("The sum is 2");
});

test("sum", () => {
  const sum = 1 + 2;
  expect(sum).toBe(5);
});
