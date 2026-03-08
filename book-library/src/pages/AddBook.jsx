import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddBook() {

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [cover, setCover] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      id: Date.now().toString(),
      title,
      author,
      year,
      cover
    };

    const existing = JSON.parse(localStorage.getItem("customBooks")) || [];

    localStorage.setItem(
      "customBooks",
      JSON.stringify([...existing, newBook])
    );

    navigate("/library");
  };

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Add a Book</h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 bg-neutral-900 border border-neutral-700 rounded"
          required
        />

        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full p-3 bg-neutral-900 border border-neutral-700 rounded"
          required
        />

        <input
          type="text"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="w-full p-3 bg-neutral-900 border border-neutral-700 rounded"
        />

        <input
          type="text"
          placeholder="Cover Image URL"
          value={cover}
          onChange={(e) => setCover(e.target.value)}
          className="w-full p-3 bg-neutral-900 border border-neutral-700 rounded"
        />

        <button
          type="submit"
          className="bg-purple-600 px-4 py-2 rounded hover:bg-purple-500"
        >
          Add Book
        </button>

      </form>
    </div>
  );
}

export default AddBook;