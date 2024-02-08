import React from 'react';
import '../App.css';
import { Route } from '../routes';

export const Movies = () => {
  const { results: movies } = Route.useLoaderData();

  return (
    <div className="App">
      <h1>Movies</h1>
      <ul className="movie-list">
        {movies.map((movie) => (
          <li className="card" key={movie.id}>
            <a href={`/movies/${movie.id}`}>
              <div className="img-container">
                <img src={movie.poster_path} alt={movie.title} />
              </div>
              <h2>{movie.title}</h2>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
