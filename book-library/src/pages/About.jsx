import { useState } from "react";

function About() {

  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-10">

      {/* About Section */}
      <div>
        <h1 className="text-3xl font-bold mb-4">About This App</h1>

        <p className="text-gray-300 mb-3">
          This Book Library App allows users to discover books, search titles,
          and add their own books to a personal collection.
        </p>

        <p className="text-gray-400">
          Built using React, React Router, and TailwindCSS. Books are fetched
          from the OpenLibrary API while custom books are stored in localStorage.
        </p>
      </div>

      {/* Contact Form */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 bg-neutral-900 border border-neutral-700 rounded"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 bg-neutral-900 border border-neutral-700 rounded"
            required
          />

          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 bg-neutral-900 border border-neutral-700 rounded"
            required
          />

          <button
            type="submit"
            className="bg-purple-600 px-5 py-2 rounded hover:bg-purple-500"
          >
            Send Message
          </button>

        </form>

        {sent && (
          <p className="text-green-400 mt-4">
            Message sent successfully!
          </p>
        )}

      </div>

    </div>
  );
}

export default About;