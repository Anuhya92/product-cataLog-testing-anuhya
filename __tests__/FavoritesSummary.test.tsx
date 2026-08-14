import { render, screen, fireEvent } from "@testing-library/react";
import Home from "@/app/page";
import FavoritesSummary from "@/components/FavoritesSummary";
import { Product } from "@/types/products";

const testProduct: Product = {
  id: "1",
  name: "Wireless Earbuds",
  price: 49.99,
  category: "Electronics",
  image:
    "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=300&auto=format&fit=crop",
  isAvailable: true,
  isFavorite: false,
};

const testProduct2: Product = {
  id: "2",
  name: "Face Serum",
  price: 24.5,
  category: "Beauty",
  image: "https://via.placeholder.com/150",
  isAvailable: true,
  isFavorite: false,
};

const testOutOfStockProduct: Product = {
  id: "3",
  name: "Denim Jacket",
  price: 69.0,
  category: "Clothes",
  image: "https://via.placeholder.com/150",
  isAvailable: false,
  isFavorite: false,
};

describe("Test Favorite Summary", () => {
  test("Renders empty Summary message  when favorite array is empty", () => {
    render(<Home />);
    const favBadge = screen.getByTestId("empty-favorites-msg");
    expect(favBadge).toHaveTextContent("No favorite items saved yet.");
  });
  test("Render list item matching favorite product", () => {
    render(
      <FavoritesSummary
        favorites={[testProduct]}
        onClearFavorites={jest.fn()}
      />,
    );
    expect(screen.getByRole("listitem")).toHaveTextContent("Wireless Earbuds");
  });
  test("Displays correct count badge in header", () => {
    render(
      <FavoritesSummary
        favorites={[testProduct]}
        onClearFavorites={jest.fn()}
      />,
    );
    expect(screen.getByText("1 Item")).toBeInTheDocument();
  });
  test("Renders clear favorite button when item exists", () => {
    render(
      <FavoritesSummary
        favorites={[testProduct]}
        onClearFavorites={jest.fn()}
      />,
    );

    expect(
      screen.getByRole("button", { name: /clear favorites/i }),
    ).toBeInTheDocument();
  });
  test("Clears favorite item list when clear button is clicked", () => {
    const handleClear = jest.fn();
    render(
      <FavoritesSummary
        favorites={[testProduct]}
        onClearFavorites={handleClear}
      />,
    );

    const clearButton = screen.getByRole("button", {
      name: /clear favorites/i,
    });
    fireEvent.click(clearButton);
    expect(handleClear).toHaveBeenCalledTimes(1);
  });

  test("Clicking Favorite Button will update Favourites Count and adds item to Favorite Summary", () => {
    render(<Home />);
    const favButtons = screen.getAllByRole("button", {
      name: /mark as favourite/i,
    });
    fireEvent.click(favButtons[0]);
    expect(screen.getByTestId("favorite-badge")).toHaveTextContent(
      "Favorites: 1",
    );
    expect(screen.getByTestId("favorites-summary")).toBeInTheDocument();
  });

  test('Clicking "Mark as Favorite" updates text to "Added To Favorite" ', () => {
    render(<Home />);
    const favButtons = screen.getAllByRole("button", {
      name: /mark as favourite/i,
    });
    const markFavButton = favButtons[0];
    fireEvent.click(markFavButton);

    const addedToFavButton = screen.getByRole("button", {
      name: /added to favourite/i,
    });
    expect(addedToFavButton).toBeInTheDocument();
    expect(addedToFavButton).toBeDisabled();
  });

  test("Clicking Clear Favorites resets state, badge count to 0, and restores empty summary", () => {
    render(<Home />);

    const favButtons = screen.getAllByRole("button", {
      name: /mark as favourite/i,
    });
    fireEvent.click(favButtons[0]);
    expect(screen.getByTestId("favorite-badge")).toHaveTextContent(
      "Favorites: 1",
    );

    const clearButton = screen.getByRole("button", {
      name: /clear favorites/i,
    });
    fireEvent.click(clearButton);

    expect(screen.getByTestId("favorite-badge")).toHaveTextContent(
      "Favorites: 0",
    );
    expect(screen.getByTestId("empty-favorites-msg")).toBeInTheDocument();
  });
});
