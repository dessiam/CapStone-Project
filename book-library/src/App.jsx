import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Library from "./pages/Library";
import AddBook from "./pages/AddBook";
import BookDetails from "./pages/BookDetails";
import About from "./pages/About";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-neutral-950 text-white flex flex-col">
        <Navbar />

        <main className="flex-grow max-w-6xl mx-auto px-6 py-12 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/library" element={<Library />} />
            <Route path="/add-book" element={<AddBook />} />
            <Route path="/book/:id" element={<BookDetails />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;