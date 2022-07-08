import React from "react";
import { useState, useEffect } from "react";
import "../App.css";
import Movies from "./Movies";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    getMovies();
    console.log(searchResults);
  }, [searchInput]);

  async function getMovies() {
    const response = await fetch(`https://swapi.dev/api/films/`);
    const data = await response.json();
    const results = data.results
      .filter((movie) =>
        movie.title.toLowerCase().includes(searchInput.toLowerCase())
      )
      .map((movie) => {
        return {
          id: movie.episode_id,
          title: movie.title,
          release_date: movie.release_date,
          director: movie.director,
          producer: movie.producer,
          img: "https://m.media-amazon.com/images/I/51rHfst51TL._AC_SY1000_.jpg",
        };
      });
    setSearchResults(results);
  }

  function handleChange(event) {
    const timeOut = setTimeout(() => {
      setSearchInput(event.target.value);
    }, 1000);

    return () => clearTimeout(timeOut);
  }
  return (
    <div className="search-bar">
      <div className="containerr">
        <h2>Movie App</h2>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Search movie..."
        />
      </div>
      <Movies movieData={searchResults} />
    </div>
  );
};

export default SearchBar;
