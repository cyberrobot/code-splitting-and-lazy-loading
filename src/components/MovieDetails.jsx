import React from 'react';
import { Route } from '../routes/movies/$id';

export const MovieDetails = () => {
  const movieData = Route.useLoaderData();
  return (
    <div className="movie-details">
      <div className="thumbnail">
        <img
          width="300"
          height="450"
          src={movieData.poster_path}
          alt={movieData.title}
        />
      </div>
      <div className="details">
        <h2>{movieData.title}</h2>
        <p>Released: {movieData.release_date}</p>
        <p>Rating: {movieData.vote_average}</p>
        <h3>Overview</h3>
        <p>{movieData.overview}</p>
      </div>
    </div>
  );
};
