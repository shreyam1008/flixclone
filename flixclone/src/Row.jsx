import React, { useState, useEffect } from "react";
import axios from "./axios";

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
    };
  }, []);

  return (
    <div>
      {/* titles */}
      <h2>{title}</h2>

      {/* container with photos */}
    </div>
  );
};

export default Row;
