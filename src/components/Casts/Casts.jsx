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
        console.log(data);

        setMovieCasts(data);
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
      <CastList casts={movieCasts} />
      {/* <NavLink className="back" to={backLinkHref.current}>
        Go back
      </NavLink>
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

      <h3> Additional information</h3>
      <ul>
        <li>
          <NavLink to="cast">Casts</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="cast" element={<Casts />} />
        <Route path="reviews" element={<Reviews />} />
      </Routes> */}
    </>
  );
};

export default Casts;
