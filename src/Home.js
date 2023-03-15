import Header from "./components/Layout/Header"
import React, { useState } from 'react';

import MoviesList from './MovieList';

const Home=()=>{
    const [movies, setMovies] = useState([]);

  function fetchMoviesHandler() {
    fetch('https://swapi.dev/api/films/')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const transformedMovies = data.results.map((movieData) => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseDate: movieData.release_date,
          };
        });
        setMovies(transformedMovies);
      });
  }

    return <>
    <Header />
    <h1>Home page</h1>
    <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    

 
    </>
}
export default Home