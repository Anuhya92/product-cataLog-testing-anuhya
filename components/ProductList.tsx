import type { Product } from "@/types/products";
import ProductCard from "@/components/ProductCard";

interface ProductListProps {
  products: Product[];
  favorites: Product[];
  onToggleFavorite: (product: Product) => void;
}

export default function ProductList({
  products,
  favorites,
  onToggleFavorite,
}: ProductListProps) {
  if (products.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isFavorite={favorites.some((fav) => fav.id === product.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}
