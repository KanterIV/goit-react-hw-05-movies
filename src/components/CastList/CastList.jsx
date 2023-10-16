import React from 'react';
const defaultImage =
  'https://pixabay.com/get/gce051c8cb08364d740b7b5d3cdda10533e956f5c16535f92dac2f8c37374dcf8d55d7ba94e7af5f3558a60d6b8d152bb10c3e4e70fa8be0784ebd20aa77c5a25_1280.png';
const CastList = ({ casts }) => {
  return (
    <ul>
      {casts &&
        casts.map(({ name, profile_path, character, id }) => (
          <li key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                  : defaultImage
              }
              width={150}
              alt={`poster ${name}`}
            />
            <h3>{name}</h3>
            <p>Character: {character}</p>
          </li>
        ))}
    </ul>
  );
};

export default CastList;
