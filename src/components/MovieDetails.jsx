import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MovieDetails = () => {
  const movieData = useLoaderData();
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

export default MovieDetails;
