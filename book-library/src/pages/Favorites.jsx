import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import BookCard from "../components/BookCard";

function Favorites() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Favorite Books</h1>

      {favorites.length === 0 && (
        <p className="text-gray-400">No favorites yet.</p>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {favorites.map((book) => (
          <div key={book.id} className="bg-neutral-900 p-4 rounded-xl">

            <img src={book.cover} className="mb-4" />

            <h3 className="font-semibold">{book.title}</h3>

            <button
              onClick={() => removeFavorite(book.id)}
              className="mt-3 text-sm bg-red-600 px-3 py-1 rounded hover:bg-red-500"
            >
              Remove
            </button>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;