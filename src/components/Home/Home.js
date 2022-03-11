import React, { useEffect, useState } from 'react';
import './Home.scss';
import MediaList from '../MediaList/MediaList';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/MovieSlice';

const Home = () => {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();
  const loadMovie = 'avengers';
  const loadShow = 'breaking bad';

  useEffect(() => {
    dispatch(fetchAsyncMovies(loadMovie));
    dispatch(fetchAsyncShows(loadShow));
    setTerm('');
  }, [dispatch]);

  const submitHandler = (e) => {
    if (term === '' || term === null || term === undefined) {
      return alert('Please enter a movie or show');
    }
    e.preventDefault();
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
  }

  return (
    <>
      <div className="home">
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
      </div>
    </>
  );
};

export default Home;
