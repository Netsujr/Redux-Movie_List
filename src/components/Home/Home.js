import React, { useEffect } from 'react';
import './Home.scss';
import MediaList from '../MediaList/MediaList';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/MovieSlice';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncShows());
    dispatch(fetchAsyncMovies());
  }, [dispatch]);

  return (
    <>
      <div className='banner'>Banner goes here</div>
      <MediaList />
    </>
  );
};

export default Home;
