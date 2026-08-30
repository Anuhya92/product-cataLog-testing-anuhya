import { render, screen } from "@testing-library/react";
import Footer from "@/components/Footer";

describe("Footer Component Testing", () => {
  test("Renders a footer landmark", () => {
    render(<Footer />);
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  test("Displays copyright text with the site name", () => {
    render(<Footer />);
    expect(
      screen.getByText(/ Your First Shopping Partner/i),
    ).toBeInTheDocument();
  });

  test("Displays the current year in the copyright line", () => {
    render(<Footer />);
    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument();
  });

  
});
