import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
// import Home from 'pages/Home';
// import Movies from 'pages/Movies';
// import MovieDetails from 'pages/MovieDetails';
import { AppWrapper } from './Wrapper/Wrapper.styled';
import { Suspense, lazy } from 'react';
import { Grid } from 'react-loader-spinner';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));

export const App = () => {
  return (
    <>
      <Header />
      <AppWrapper>
        <Suspense
          fallback={
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
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId/*" element={<MovieDetails />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </AppWrapper>
    </>
  );
};
