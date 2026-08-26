import FavoriteBadge from "./FavoriteBadge";
interface HeaderProps {
  favoriteCount: number;
}
export default function Header({ favoriteCount }: HeaderProps) {
  return (
    <header className="rounded-b-2xl bg-red-600 px-6 py-8 text-center text-white shadow-md">
      <h1 className="text-3xl font-extrabold sm:text-4xl">
        Amazon - Your First Shopping Partner
      </h1>
      <div className="mt-3">
        <FavoriteBadge favoriteCount={favoriteCount} />
      </div>
      
    </header>
  );
}