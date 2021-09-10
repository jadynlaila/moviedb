import React, { useState, useContext } from "react";
import { useFetch } from "./useFetch";

const MovieContext = React.createContext();

export const MovieProvider = ({ children }) => {
  const [query, setQuery] = useState("batman");
  const { movies, loading, error } = useFetch(`&s=${query}`);

  return (
    <MovieContext.Provider value={{ query, setQuery, loading, movies, error }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => {
  return useContext(MovieContext);
};
