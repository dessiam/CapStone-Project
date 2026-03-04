import bookBg from "../assets/book-bg.jpg";

function Home() {
  return (
    <section
      className="relative min-h-[80vh] flex items-center justify-center text-center"
      style={{
        backgroundImage: `url(${bookBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 px-6">
        <h1 className="text-5xl font-bold mb-6">
          Welcome to <span className="text-purple-600">MyLibrary</span>
        </h1>

        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Organize your books, track what you've read, and build your personal
          digital library in one clean, minimalist space.
        </p>
      </div>
    </section>
  );
}

export default Home;