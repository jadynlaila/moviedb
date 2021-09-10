import { useState, useEffect } from "react";
const API_ENDPOINT = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

// searchQuery will be something like &s=batman
export const useFetch = (searchQuery) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ show: "false", msg: "" });
  const [movies, setMovies] = useState(null);

  // url is always the api endpoint + the search query
  const fetchMovie = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.Response === "True") {
        // maybe add || movies
        setMovies(data.Search);
        setError({ show: false, msg: "" });
      } else {
        setError({ show: true, msg: data.Error });
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log(`${API_ENDPOINT}${searchQuery}`);
    fetchMovie(`${API_ENDPOINT}${searchQuery}`);
  }, [searchQuery]);

  return { loading, error, movies };
};
