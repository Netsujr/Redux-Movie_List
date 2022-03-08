import React from 'react';
import { useSelector } from 'react-redux';
import './MediaList.scss';
import { getAllMovies } from '../../features/movies/MovieSlice';
import { getAllSeries } from '../../features/movies/SeriesSlice';
import MovieCard from '../Movies/MovieCard/MovieCard';
import SeriesCard from '../Series/SeriesCard';

const MovieList = () => {
  const movies = useSelector(getAllMovies);
  const series = useSelector(getAllSeries);
  let [renderMovies, renderSeries] = null;

  renderMovies = movies.Response === 'True' ? (
    movies.Search.map((movie, index) => (
      <MovieCard
        key={index}
        data={movie}
      />
    ))
  ) : (
    <div className='movies-error'>
      <h3>{movies.Error}</h3>
    </div>
  );

  renderSeries = series.Response === 'True' ? (
    series.Search.map((show, index) => (
      <SeriesCard
        key={index}
        data={show}
      />
    ))
  ) : (
    <div className='series-error'>
      <h3>{series.Error}</h3>
    </div>
  );


  return (
    <div className='movie-wrapper'>
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          {renderMovies}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
