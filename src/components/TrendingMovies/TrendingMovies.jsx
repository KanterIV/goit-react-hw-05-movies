import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const TrendingMovies = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className="trending-list">
      {movies &&
        movies.map(movie => (
          <li className="trending-item" key={movie.id}>
            <Link
              state={{ from: location }}
              className="trending-link"
              to={`/movies/${movie.id}`}
            >
              <img
                className="trending-item-img"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={`Card to ${movie.title}`}
              />
              <p>{movie.title ? movie.title : movie.name}</p>
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default TrendingMovies;
