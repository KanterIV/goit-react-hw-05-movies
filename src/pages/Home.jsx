import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from 'components/Services/api';
import TrendingMovies from 'components/TrendingMovies/TrendingMovies';
import { Grid } from 'react-loader-spinner';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const [trendingMoviesArr, setTrendingMoviesArr] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setIsLoading(true);
        const { results } = await getTrendingMovies();

        setTrendingMoviesArr(results);
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
    fetchTrendingMovies();
  }, []);

  return (
    <>
      <h1 className="title">Trending today</h1>
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
      <TrendingMovies movies={trendingMoviesArr} />
    </>
  );
};

export default Home;
