import { Product } from "@/types/products";

interface ProductCardProps {
  product: Product;
  isFavorite: boolean;
  onToggleFavorite: (product: Product) => void;
}

export default function ProductCard({
  product,
  isFavorite,
  onToggleFavorite,
}: ProductCardProps) {
  const outOfStock = !product.isAvailable;
  const disabled = outOfStock || isFavorite;

  const buttonLabel = outOfStock
    ? "Out of Stock"
    : isFavorite
      ? "Added to Favourite"
      : "Mark as Favourite";

  return (
    <div
      data-testid="product-card"
      className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-gray-100 shadow-sm"
    >
      <img
        src={product.image}
        alt={product.name}
        className="h-40 w-full object-cover"
      />
      <div className="flex flex-1 flex-col gap-1 p-4">
        <h3 className="text-base font-bold text-gray-900">{product.name}</h3>
        <p className="text-xs text-gray-500">{product.category}</p>
        <p className="mb-3 text-sm font-medium text-gray-800">
          {product.price}kr
        </p>
        <button
          type="button"
          disabled={disabled}
          onClick={() => onToggleFavorite(product)}
          className={`mt-auto rounded-md py-2 text-sm font-semibold text-white transition-colors ${
            disabled
              ? "cursor-not-allowed bg-gray-400"
              : "bg-red-600 hover:bg-red-700"
          }`}
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  );
}
