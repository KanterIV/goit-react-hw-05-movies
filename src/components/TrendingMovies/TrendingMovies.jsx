import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const TrendingMovies = ({ movies }) => {
  const defaultImage =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  const location = useLocation();

  return (
    <ul className="trending-list">
      {movies &&
        movies.map(({ id, poster_path, title, name }) => (
          <li className="trending-item" key={id}>
            <Link
              state={{ from: location }}
              className="trending-link"
              to={`/movies/${id}`}
            >
              <img
                className="trending-item-img"
                width={300}
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                    : defaultImage
                }
                alt={`Card to ${title}`}
              />
              <h2 className="trending-item-title">{title ? title : name}</h2>
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default TrendingMovies;
