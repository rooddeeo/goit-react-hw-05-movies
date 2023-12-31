import { Route, Routes } from 'react-router-dom';
import Layout from 'Layout/Layout';
import { lazy } from 'react';

const HomePage = lazy(() => {
  return import('pages/HomePage/HomePage');
});
const CastPage = lazy(() => {
  return import('pages/CastPage/CastPage');
});
const ReviewsPage = lazy(() => {
  return import('pages/ReviewsPage/ReviewsPage');
});
const MovieDetailsPage = lazy(() => {
  return import('pages/MovieDetailsPage/MovieDetailsPage');
});
const MoviesPage = lazy(() => {
  return import('pages/MoviesPage/MoviesPage');
});

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<CastPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
