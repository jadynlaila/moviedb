import React from "react";
import { useMovieContext } from "../util/context";

const SearchForm = () => {
  const { query, setQuery } = useMovieContext();
  return (
    <form onSubmit={(e) => e.preventDefault()} className="search-form">
      <h2>search movies</h2>
      <input
        type="text"
        className="form-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {/* add an error container later */}
    </form>
  );
};

export default SearchForm;
