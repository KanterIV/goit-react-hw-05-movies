import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const TrendingMovies = ({ movies }) => {
  const defaultImage =
    'https://pixabay.com/get/gce051c8cb08364d740b7b5d3cdda10533e956f5c16535f92dac2f8c37374dcf8d55d7ba94e7af5f3558a60d6b8d152bb10c3e4e70fa8be0784ebd20aa77c5a25_1280.png';
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
              <p>{title ? title : name}</p>
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default TrendingMovies;
