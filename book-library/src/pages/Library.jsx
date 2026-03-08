import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import SearchBar from "../components/SearchBar";

function Library() {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("fiction");
  const [loading, setLoading] = useState(false);

  console.log("Books:", books);
 

  useEffect(() => {
  const fetchBooks = async () => {
    setLoading(true);

    console.log("Fetching books now...");

    const res = await fetch(`https://openlibrary.org/search.json?q=${query}`);
    const data = await res.json();

    console.log("API response:", data.docs); // Log the raw API response
    setBooks(data.docs.slice(0, 12));

    setLoading(false);
  };

  fetchBooks();
}, [query]);

  const handleSearch = (searchTerm) => {
    setQuery(searchTerm || "fiction");
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Discover Books</h1>

      <SearchBar onSearch={handleSearch} />

      {loading && <p className="text-gray-400 mb-4">Searching books...</p>}
      {!loading && books.length === 0 && (
  <p className="text-gray-400">No books found.</p>
)}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {books.map((book, index) => {
        console.log(book); // inspect the book object

        const coverUrl = book.cover_i
            ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
            : "";

        return (
            <BookCard
                key={index}
                id={book.key}
                title={book.title}
                author={book.author_name?.[0] || "Unknown Author"}
                year={book.first_publish_year || "N/A"}
                cover={coverUrl}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Library;