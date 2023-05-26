import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setmovies] = useState([]);
  const fetchdatahandler = async () => {
    const response = await fetch("https://swapi.dev/api/films/");

    const data = await response.json();
    const updatedata = data.results.map((item) => {
      return {
        id: item.episode_id,
        title: item.title,
        releaseDate: item.release_date,
        openingText: item.opening_crawl,
      };
    });
    setmovies(updatedata);
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchdatahandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
