import type { Product } from "@/types/products";

interface FavoritesSummaryProps {
  favorites: Product[];
  onClearFavorites: () => void;
}

export default function FavoritesSummary({
  favorites,
  onClearFavorites,
}: FavoritesSummaryProps) {
  if (favorites.length === 0) {
    return (
      <div
        data-testid="empty-favorites-msg"
        className="mx-auto mt-8 max-w-md rounded-xl bg-white p-6 text-center text-sm text-gray-500 shadow-sm"
      >
        No favorite items saved yet.
      </div>
    );
  }

  const itemLabel = `${favorites.length} ${
    favorites.length === 1 ? "Item" : "Items"
  }`;

  return (
    <div
      data-testid="favorites-summary"
      className="mx-auto mt-8 max-w-md rounded-xl bg-white p-6 shadow-sm"
    >
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-bold text-gray-900">Your Favorites</h2>
        <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-600">
          {itemLabel}
        </span>
      </div>
      <ul className="mb-4 divide-y divide-gray-100">
        {favorites.map((item, index) => (
          <li
            key={`${item.id}-${index}`}
            className="flex items-center justify-between py-2 text-sm"
          >
            <div>
              <p className="font-medium text-gray-800">{item.name}</p>
              <p className="text-xs text-gray-500">{item.category}</p>
            </div>
            <span className="font-semibold text-gray-800">
              {item.price}kr
            </span>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={onClearFavorites}
        className="w-full rounded-md bg-red-600 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-700"
      >
        Clear Favorites
      </button>
    </div>
  );
}
