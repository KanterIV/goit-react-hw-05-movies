import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Grid } from 'react-loader-spinner';
import TrendingMovies from 'components/TrendingMovies/TrendingMovies';
import { getMoviesbySearchQuery } from 'components/Services/api';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchMovies, setSearchMovies] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const query = searchParams.get('query');

  useEffect(() => {
    const fetchMoviesBySearchQuery = async () => {
      try {
        if (!query) return;
        setIsLoading(true);
        const data = await getMoviesbySearchQuery(query);

        setSearchMovies(data.results);
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
    fetchMoviesBySearchQuery();
  }, [query]);

  const handleSearchFormSubmit = event => {
    event.preventDefault();
    const searchQuery = event.currentTarget.elements.searchMovieByName.value;
    setSearchParams({ query: searchQuery });
    event.currentTarget.reset();
  };

  return (
    <>
      <form className="form" onSubmit={handleSearchFormSubmit}>
        <label>
          <p>Search movie by name</p>
          <input className="input" type="text" name="searchMovieByName" />
        </label>
        <button className="btnSubmit">Submit</button>
      </form>
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
      {searchMovies.length > 0 && <TrendingMovies movies={searchMovies} />}
    </>
  );
};

export default Movies;
