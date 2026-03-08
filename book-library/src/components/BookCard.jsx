import { useContext } from "react";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../context/FavoritesContext";

function BookCard({ id, title, author, year, cover }) {

  const { addFavorite } = useContext(FavoritesContext);

  const workId = id.split("/").pop();

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-purple-600 transition duration-300">

      <div className="h-60 overflow-hidden">
        <img
          src={cover || "https://via.placeholder.com/150x220?text=No+Cover"}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>

        <p className="text-gray-400 mb-1">{author}</p>

        <p className="text-gray-500 text-sm">{year}</p>

        <div className="flex justify-between items-center mt-4">

          <Link
            to={`/book/${workId}`}
            className="text-sm text-purple-500 hover:text-purple-400 transition"
          >
            View Details →
          </Link>

          <button
            onClick={() => addFavorite({ id, title, author, year, cover })}
            className="text-sm bg-yellow-500 px-3 py-1 rounded hover:bg-yellow-400 transition"
          >
            ⭐ Favorite
          </button>

        </div>
      </div>
    </div>
  );
}

export default BookCard;