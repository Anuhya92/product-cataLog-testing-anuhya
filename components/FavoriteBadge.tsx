interface FavoriteBadgeProps {
  favoriteCount: number;
}

export default function FavoriteBadge({ favoriteCount }: FavoriteBadgeProps) {
  return (
    <span
      data-testid="favorite-badge"
      className="inline-block rounded-full bg-white px-4 py-1 text-sm font-semibold text-red-600 shadow-sm"
    >
      Favorites: {favoriteCount}
    </span>
  );
}
