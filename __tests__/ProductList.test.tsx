import { render, screen, fireEvent } from "@testing-library/react";

import ProductList from "@/components/ProductList";
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

describe("Test For Product List ", () => {
  test("", () => {
    render(
      <ProductList products={[]} favorites={[]} onToggleFavorite={jest.fn()} />,
    );

    expect(screen.queryByTestId("product-card")).not.toBeInTheDocument();
  });

  test("Renders multiple product cards using getAllByRole", () => {
    render(
      <ProductList
        products={[testProduct, testProduct2]}
        favorites={[]}
        onToggleFavorite={jest.fn()}
      />,
    );

    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(2);
  });
});
