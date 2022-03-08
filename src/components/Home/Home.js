import React, { useEffect } from 'react';
import './Home.scss';
import MovieList from '../MovieList/MovieList';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies } from '../../features/movies/MovieSlice';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncMovies());
  }, []);

  return (
    <>
      <div className='banner'>Banner goes here</div>
      <MovieList />
    </>
  );
};

export default Home;
