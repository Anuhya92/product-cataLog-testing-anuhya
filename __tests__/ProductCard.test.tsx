import { render, screen, fireEvent } from "@testing-library/react";
import ProductCard from "@/components/ProductCard";
import type { Product } from "@/types/products";

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

describe("Product Card Component Testing", () => {
  test("Product Heading,Category and Price display properly", () => {
    render(
      <ProductCard
        product={testProduct}
        isFavorite={false}
        onToggleFavorite={jest.fn()}
      />,
    );
    expect(
      screen.getByRole("heading", { name: "Wireless Earbuds" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Electronics")).toBeInTheDocument();
    expect(screen.getByText("49.99kr")).toBeInTheDocument();
  });
  test("Renders image with correct name", () => {
    render(
      <ProductCard
        product={testProduct}
        isFavorite={false}
        onToggleFavorite={jest.fn()}
      />,
    );
    const img = screen.getByRole("img", { name: "Wireless Earbuds" });
    expect(img).toHaveAttribute("src", testProduct.image);
  });
  test('Displays "Mark as Favourite" when item is in stock', () => {
    render(
      <ProductCard
        product={testProduct}
        isFavorite={false}
        onToggleFavorite={jest.fn()}
      />,
    );
    const button = screen.getByRole("button", { name: /mark as favourite/i });
    expect(button).toBeEnabled();
  });
  test('Displays "Added to Favourite" and disables button when isFavorite is true', () => {
    render(
      <ProductCard
        product={testProduct}
        isFavorite={true}
        onToggleFavorite={jest.fn()}
      />,
    );
    const button = screen.getByRole("button", { name: /added to favourite/i });
    expect(button).toBeDisabled();
  });
  test('displays "Out of Stock" and disables button when isAvailable is false', () => {
    render(
      <ProductCard
        product={testOutOfStockProduct}
        isFavorite={false}
        onToggleFavorite={jest.fn()}
      />,
    );

    const outOfStockButton = screen.getByRole("button", {
      name: /out of stock/i,
    });

    expect(outOfStockButton).toBeInTheDocument();
    expect(outOfStockButton).toBeDisabled();
  });
  test('Test button hover on "Mark As Favourite" button on product card', () => {
    render(
      <ProductCard
        product={testProduct}
        isFavorite={false}
        onToggleFavorite={jest.fn()}
      />,
    );
    const favbutton = screen.getByRole("button", {
      name: /mark as favourite/i,
    });
    fireEvent.mouseOver(favbutton);
    expect(favbutton).toBeInTheDocument();
  });
});
