"use client";
import Header from "@/components/Header";
import type { Product } from "@/types/products";
import { useState } from "react";
import ProductList from "@/components/ProductList";
import FavoritesSummary from "@/components/FavoritesSummary";
const products: Product[] = [
  {
    id: "1",
    name: "Wireless Earbuds",
    price: 49.99,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=300&auto=format&fit=crop",
    isAvailable: true,
    isFavorite: false,
  },
  {
    id: "2",
    name: "Face Serum",
    price: 24.5,
    category: "Beauty",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&auto=format&fit=crop",
    isAvailable: true,
    isFavorite: false,
  },
  {
    id: "3",
    name: "Denim Jacket",
    price: 69,
    category: "Clothes",
    image:
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=300&auto=format&fit=crop",
    isAvailable: false,
    isFavorite: false,
  },
  {
    id: "4",
    name: "Wireless Earbuds",
    price: 49.99,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=300&auto=format&fit=crop",
    isAvailable: true,
    isFavorite: false,
  },
  {
    id: "5",
    name: "Face Serum",
    price: 24.5,
    category: "Beauty",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&auto=format&fit=crop",
    isAvailable: true,
    isFavorite: false,
  },
  {
    id: "6",
    name: "Denim Jacket",
    price: 69,
    category: "Clothes",
    image:
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=300&auto=format&fit=crop",
    isAvailable: false,
    isFavorite: false,
  },
];

export default function Home() {
  const [favorites, setFavorites] = useState<Product[]>([]);

  const handleToggleFavorite = (product: Product) => {
    setFavorites((prev) =>
      prev.some((fav) => fav.id === product.id) ? prev : [...prev, product],
    );
  };

  const handleClearFavorites = () => {
    setFavorites([]);
  };
  return (
    <div className="">
      <Header favoriteCount={favorites.length} />
      <main className="mx-auto max-w-5xl px-4 py-8">
        <ProductList
          products={products}
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
        />
        <FavoritesSummary
          favorites={favorites}
          onClearFavorites={handleClearFavorites}
        />
      </main>
    </div>
  );
}
