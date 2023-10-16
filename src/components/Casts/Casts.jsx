import { getMovieCredits } from 'components/Services/api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Grid } from 'react-loader-spinner';
import CastList from 'components/CastList/CastList';

const Casts = () => {
  const { movieId } = useParams();

  const [movieCasts, setMovieCasts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieCasts = async () => {
      try {
        setIsLoading(true);
        const data = await getMovieCredits(movieId);
        const castArr = data.cast;
        setMovieCasts(castArr);
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
    fetchMovieCasts();
  }, [movieId]);

  return (
    <>
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
      {movieCasts && <CastList casts={movieCasts} />}
    </>
  );
};

export default Casts;
