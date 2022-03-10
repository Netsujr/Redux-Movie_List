import React, { useEffect, useState } from 'react';
import './Home.scss';
import MediaList from '../MediaList/MediaList';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/MovieSlice';

const Home = () => {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncShows());
    dispatch(fetchAsyncMovies());
  }, [dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchAsyncMovies(term));
  }

  return (
    <>
      <div className='search-bar'>
        <form onSubmit={submitHandler}>
          <input
          type='text'
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder='Search for a movie or show' />
          <button type='submit'> <i className='fa fa-search'></i></button>
        </form>
      </div>
      <MediaList />
    </>
  );
};

export default Home;
