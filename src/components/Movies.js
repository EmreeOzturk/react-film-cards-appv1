import React from "react";
import "../App.css";

const Movies = (props) => {
  return (
    <div className="movies">
      <div className="container">
        {props.movieData.map((movie) => {
          return (
            <div className="movie">
              <img src={movie.img} alt={movie.title} />
              <h3>{movie.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Movies;
