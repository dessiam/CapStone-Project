import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-neutral-950 border-b border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-xl font-semibold text-white">
          <span className="text-purple-600">My</span>Library
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8 text-sm font-medium">
          <Link
            to="/library"
            className="text-gray-400 hover:text-purple-500 transition duration-300"
          >
            Library
          </Link>

          <Link
            to="/add-book"
            className="text-gray-400 hover:text-purple-500 transition duration-300"
          >
            Add Book
          </Link>

          <Link 
            to="/favorites" 
            className="text-gray-400 hover:text-purple-500 transition duration-300"
         >
            Favorites
          </Link>

          <Link
            to="/about"
            className="text-gray-400 hover:text-purple-500 transition duration-300"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;