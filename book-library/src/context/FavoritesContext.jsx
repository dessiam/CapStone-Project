import { createContext, useState, useEffect } from "react";

export const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {

  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  const addFavorite = (book) => {
    setFavorites((prev) => {
      const exists = prev.find((fav) => fav.id === book.id);
      if (exists) return prev;
      return [...prev, book];
    });
  };

  const removeFavorite = (id) => {
    setFavorites((prev) => prev.filter((book) => book.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}