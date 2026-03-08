import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      const res = await fetch(`https://openlibrary.org/works/${id}.json`);
      const data = await res.json();
      setBook(data);
    };

    fetchBook();
  }, [id]);

  if (!book) {
    return <p className="text-gray-400">Loading book details...</p>;
  }

  const coverUrl = book.covers
    ? `https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`
    : "https://via.placeholder.com/300x450?text=No+Cover";

  return (
    <div className="grid md:grid-cols-2 gap-10 items-start">
      
      {/* Cover */}
      <div>
        <img
          src={coverUrl}
          alt={book.title}
          className="rounded-xl shadow-lg hover:scale-105 transition duration-300"
        />
      </div>

      {/* Book Info */}
      <div>
        <h1 className="text-4xl font-bold mb-4">{book.title}</h1>

        <p className="text-gray-400 mb-6">
          {book.description
            ? typeof book.description === "string"
              ? book.description
              : book.description.value
            : "No description available."}
        </p>

        <div className="text-gray-300">
          <p className="mb-2">
            <strong>Subjects:</strong>{" "}
            {book.subjects ? book.subjects.slice(0, 6).join(", ") : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;