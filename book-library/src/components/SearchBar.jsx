function SearchBar({ onSearch }) {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="mb-8">
      <input
        type="text"
        placeholder="Search for books..."
        onChange={handleChange}
        className="w-full p-3 rounded-lg bg-neutral-900 border border-neutral-700 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
      />
    </div>
  );
}

export default SearchBar;