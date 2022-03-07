import React, { useEffect } from 'react';
import './Home.scss';
import MovieList from '../MovieList/MovieList';
import movieAPI from '../../common/api/movieAPI';


const Home = () => {

  useEffect(() => {
    fetchMovies();
  });

  const fetchMovies = async () => {
    const showSearch = 'rick and morty';
    const response = await movieAPI.get(`/search/shows?q=${showSearch}`);
    const data = await response.data;
    console.log(data);
  };



  return (
    <>
      <div className='banne'>Banner goes here</div>
      <MovieList />
    </>
  );
};

export default Home;
