import React from 'react';
const defaultImage =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

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
