import { render, screen, fireEvent } from "@testing-library/react";
import Header from "@/components/Header";

describe("Header Component Testing", () => {
  test("Render Header Text and Favourite Item Count", () => {
    render(<Header favoriteCount={0} />);
    const siteTitle = screen.getByRole("heading", { name: /amazon/i });
    expect(siteTitle).toBeInTheDocument();
  });
  test("Header Text attached with Tagline", () => {
    render(<Header favoriteCount={0} />);
    expect(
      screen.getByText(/Your First Shopping Partner/i),
    ).toBeInTheDocument();
  });
  test("Test header always has favorite badge", () => {
    render(<Header favoriteCount={0} />);
    const badge = screen.getByTestId("favorite-badge");
    expect(badge).toBeInTheDocument();
  });
});
