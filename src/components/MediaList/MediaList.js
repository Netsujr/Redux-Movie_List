import React from 'react';
import { useSelector } from 'react-redux';
import './MediaList.scss';
import { getAllMovies, getAllShows } from '../../features/movies/MovieSlice';
import MovieCard from '../Movies/MovieCard/MovieCard';
import { settings } from './SliderSettings';
import Slider from 'react-slick';

const MovieList = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  let [renderMovies, renderShows] = "";

  // settings.infinite =  movies.length > 5 ? true : false;

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

  renderShows = shows.Response === 'True' ? (
    shows.Search.map((show, index) => (
      <MovieCard
        key={index}
        data={show}
      />
    ))
  ) : (
    <div className='series-error'>
      <h3>{shows.Error}</h3>
    </div>
  );


  return (
    <>
      <div className='movie-wrapper'>
        <div className="movie-list">
          <h2>Movies</h2>
          <div className="movie-container">
            <Slider {...settings}>{renderMovies}</Slider>
          </div>
        </div>
      </div>
      <div className='movie-wrapper'>
        <div className="show-list">
          <h2>Shows</h2>
          <div className="movie-container">
            <Slider {...settings}> {renderShows}</Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieList;
