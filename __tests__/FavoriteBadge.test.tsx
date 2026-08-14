import { render, screen, fireEvent } from "@testing-library/react";
import Home from "@/app/page";
import FavoriteBadge from "@/components/FavoriteBadge";

describe("FavoriteBadge Component Testing ", () => {
  test("FavoriteBadge has 0 value on initial page load", () => {
    render(<Home />);
    const badge = screen.getByTestId("favorite-badge");
    expect(badge).toHaveTextContent("Favorites: 0");
  });
  test("FavoriteBadge shows correct number as per user's product selection ", () => {
    render(<FavoriteBadge favoriteCount={3} />);
    expect(screen.getByTestId("favorite-badge")).toHaveTextContent(
      "Favorites: 3",
    );
  });
});
