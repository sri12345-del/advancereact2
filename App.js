import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setmovies] = useState([]);
  const [isloder, setisloader] = useState(false);
  const [error, seterror] = useState(false);

  const fetchdatahandler = useCallback(async () => {
    setisloader(true);
    seterror(null);
    try {
      const response = await fetch("https://swapi.dev/api/films/");
      if (!response.ok) {
        setTimeout(() => {
          seterror("something went wrong ...retrying");
        }, 5000);
      }
      const data = await response.json();
      const updatedata = data.results.map((item) => {
        return {
          id: item.episode_id,
          title: item.title,
          releaseDate: item.release_date,
          openingText: item.opening_crawl,
        };
      }, []);
      setmovies(updatedata);
    } catch (error) {
      console.log(error);
    }
    setisloader(false);
  }, []);
  useEffect(() => {
    fetchdatahandler();
  }, [fetchdatahandler]);

  const cancelhandler = () => {
    seterror(null);
  };

  let content = <p>found no movies</p>;
  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }
  if (error) {
    content = (
      <p>
        {error} <button onClick={cancelhandler}>Cancel</button>
      </p>
    );
  }
  if (isloder) {
    content = <p>loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchdatahandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
