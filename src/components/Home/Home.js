import React, { useEffect } from 'react';
import './Home.scss';
import MovieList from '../MovieList/MovieList';
import { searchShows } from '../../common/api/search';
import { useDispatch } from 'react-redux';
import addShow from '../../features/shows/ShowSlice';


const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    searchShows();
    dispatch(addShow.data);
  }, []);

  return (
    <>
      <div className='banne'>Banner goes here</div>
      <MovieList />
    </>
  );
};

export default Home;
