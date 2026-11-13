import { render, screen } from "@testing-library/react";
import App from "./App.jsx";

test("renders the landing page with navigation", () => {
  render(<App />);
  expect(screen.getByRole("heading", { name: /hi i am shafi/i })).toBeInTheDocument();
  // Appears in both the navbar and the landing page buttons.
  expect(screen.getAllByRole("link", { name: /work experience/i, hidden: true }).length).toBeGreaterThan(0);
});
