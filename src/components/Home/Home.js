import React, { useEffect } from 'react';
import './Home.scss';
import MovieList from '../MovieList/MovieList';
import { useDispatch } from 'react-redux';
import addMovies from '../../features/movies/MovieSlice';
import movieAPI from '../../common/api/movieAPI';

const Home = () => {
  const dispatch = useDispatch();
  const movieSearch = 'Harry';

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieAPI
        .get(`?apikey=${process.env.REACT_APP_MOVIE_API_KEY}&s=${movieSearch}&type=movie`)
        .catch(error => {
          console.log(error);
        });
        console.log(response);
      dispatch(addMovies(response.data));
    };
    fetchMovies();
  }, []);

  return (
    <>
      <div className='banner'>Banner goes here</div>
      <MovieList />
    </>
  );
};

export default Home;
