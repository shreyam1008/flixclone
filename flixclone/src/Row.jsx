import React, { useState, useEffect } from "react";
import axios from "./axios";

import './Row.css'

const base_url = "https://image.tmdb.org/t/p/original";

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchUrl]);
  console.log(movies);

  return (
    <div className="row">
      {/* titles */}
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => (
          <img
            className="row__poster"
            src={`${base_url}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>

      {/* container with photos */}
    </div>
  );
};

export default Row;
