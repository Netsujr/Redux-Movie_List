import React, { useEffect } from 'react';
import './Home.scss';
import MediaList from '../MediaList/MediaList';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies } from '../../features/movies/MovieSlice';
import { fetchAsyncSeries } from '../../features/movies/SeriesSlice';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncSeries());
    dispatch(fetchAsyncMovies());
  }, []);

  return (
    <>
      <div className='banner'>Banner goes here</div>
      <MediaList />
    </>
  );
};

export default Home;
