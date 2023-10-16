import React from 'react';

const MovieCard = ({ movie }) => {
  const { title, name, poster_path, overview, genres, vote_average } = movie;
  const defaultImage =
    'https://pixabay.com/get/gce051c8cb08364d740b7b5d3cdda10533e956f5c16535f92dac2f8c37374dcf8d55d7ba94e7af5f3558a60d6b8d152bb10c3e4e70fa8be0784ebd20aa77c5a25_1280.png';

  return (
    <div className="MovieCard">
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : defaultImage
        }
        width={300}
        alt={`poster to movie: ${title}`}
      />
      <div>
        <h1>{title ? title : name}</h1>
        <p>User Score: {vote_average}</p>
        <h2>Overview</h2>
        <p>{overview}</p>

        {genres && (
          <>
            <h2>Genres</h2>
            <ul>
              {genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
