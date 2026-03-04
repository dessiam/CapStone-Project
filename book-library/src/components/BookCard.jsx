function BookCard({ title, author, year }) {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-purple-600 transition duration-300">
      
      <h3 className="text-xl font-semibold text-white mb-2">
        {title}
      </h3>

      <p className="text-gray-400 mb-1">
        {author}
      </p>

      <p className="text-gray-500 text-sm">
        {year}
      </p>

      <button className="mt-4 text-sm text-purple-500 hover:text-purple-400 transition">
        View Details →
      </button>
    </div>
  );
}

export default BookCard;