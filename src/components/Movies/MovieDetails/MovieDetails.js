import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './MovieDetails.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncMovieOrShowDetail, getSelectedMovieOrShow, removePreviousMedia } from '../../../features/movies/MovieSlice';

const MovieDetails = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieOrShow);
  console.log(data);

  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbID));
    return () => {
      dispatch(removePreviousMedia());
    }
  }, [dispatch, imdbID]);

  return (
    <div className='movie-section'>
      {Object.keys(data).length === 0 ?
          <div className='loading'>Loading...</div>
        :
        <>
          <div className="section-left">
            <div className="movie-title">
              <h1>{data.Title}</h1>
              <p>({data.Year})</p>
            </div>
            <div className="movie-info">
              <div className="movie-info-top">
                <span>
                  IMDB rating:<h4>{data.imdbRating} <i className="fas fa-star"></i></h4>
                </span>
                <span>
                  Metascore: <h4>{data.Metascore} <i className="fas fa-star"></i></h4>
                </span>
                <span>
                  Runtime: <h4>{data.Runtime}</h4>
                </span>
              </div>
              <div className='movie-plot'>
                <span>
                  <h4>{data.Plot}</h4>
                </span>
              </div>
              <span>
                Country: <h4>{data.Country}</h4>
              </span>
              <span>
                Language: <h4>{data.Language}</h4>
              </span>
              <span>
                Actors: <h4>{data.Actors}</h4>
              </span>
              <span>
                Director: <h4>{data.Director}</h4>
              </span>
              <span>
                Writer: <h4>{data.Writer}</h4>
              </span>
              <span>
                Awards: <h4>{data.Awards}</h4>
              </span>
              <span>
                BoxOffice: <h4>{data.BoxOffice ? data.BoxOffice : 'N/A'} </h4>
              </span>
            </div>
          </div>
          <div className="section-right">
            <img src={data.Poster} alt={data.Title} />
          </div>
        </>
      }
    </div>
  );
};

export default MovieDetails;
