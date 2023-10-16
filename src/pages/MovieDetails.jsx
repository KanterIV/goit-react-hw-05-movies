import { getMovieById } from 'components/Services/api';
import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Grid } from 'react-loader-spinner';
import MovieCard from 'components/MovieCard/MovieCard';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  const [movieCard, setMovieCard] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieById = async () => {
      try {
        setIsLoading(true);
        const data = await getMovieById(movieId);
        console.log(data);

        setMovieCard(data);
      } catch (error) {
        setError(
          toast.error('Sorry, something went wrong. Try again!', {
            theme: 'colored',
          })
        );
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieById();
  }, [movieId]);
  return (
    <>
      <NavLink className="back" to={backLinkHref.current} />
      {isLoading && (
        <Grid
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="grid-loading"
          radius="12.5"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      )}
      {error && <ToastContainer />}
      {movieCard && <MovieCard movie={movieCard} />}
      <p> Additional information</p>
      <ul>
        <li>
          <NavLink to="/cast">Casts</NavLink>
        </li>
        <li>
          <NavLink to="/reviews">Reviews</NavLink>
        </li>
      </ul>
    </>
  );
};

export default MovieDetails;
