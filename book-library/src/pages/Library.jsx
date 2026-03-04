import BookCard from "../components/BookCard";

function Library() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Your Library</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <BookCard 
          title="Atomic Habits"
          author="James Clear"
          year="2018"
        />

        <BookCard 
          title="Deep Work"
          author="Cal Newport"
          year="2016"
        />

        <BookCard 
          title="The Alchemist"
          author="Paulo Coelho"
          year="1988"
        />
      </div>
    </div>
  );
}

export default Library;