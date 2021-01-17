import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { searchById } from '../../services/searchService';

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    const fetchMovie = async () => {
      const result = await searchById(id);
      setMovie(result.data);
    };
    fetchMovie();
  }, [id]);

  if (!movie) return "...";

  return (
    <div className="col-auto mb-3">
      <h1>{movie.Title}</h1>
      <p>{movie.Year}</p>
      <img
        src={movie.Poster}
        alt={movie.Title}
      />
      <p>{movie.Production}</p>
      <p>{movie.Country}</p>
      <p>{movie.Genre}</p>
      <p>{movie.Actors}</p>
      <p>{movie.Plot}</p>
    </div>
  );
};

export default Movie;
