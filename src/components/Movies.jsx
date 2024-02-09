import React, { useState } from 'react';
import '../App.css';
import { Route } from '../routes';
import { Search } from './Search';
import { Link } from '@tanstack/react-router';

export const Movies = () => {
  const { results: movies } = Route.useLoaderData();
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const onChange = (e) => {
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredMovies(filtered);
  };
  return (
    <div className="App">
      <h1>Movies</h1>
      <Search onChange={onChange} />
      <ul className="movie-list">
        {filteredMovies.map((movie) => (
          <li className="card" key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <div className="img-container">
                <img src={movie.poster_path} alt={movie.title} />
              </div>
              <h2>{movie.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
