import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import { AppWrapper } from './Wrapper/Wrapper.styled';

export const App = () => {
  return (
    <>
      <Header />
      <AppWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId/*" element={<MovieDetails />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AppWrapper>
    </>
  );
};
