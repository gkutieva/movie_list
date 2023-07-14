import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { MovieCard } from './MovieCard';

export const Watched = () => {
  const { watched } = useContext(GlobalContext);

  return (
    <div className='movie-page'>
      <div className='container'>
        <div className='header'>
          <div className='heading'></div>
          <span className='count-pill'>
            {watched.length} {watched.length === 1 ? 'Movie' : 'Movies'}
          </span>
        </div>
        {watched.length > 0 ? (
          <div className='movie-grid'>
            {watched.map((movie) => (
              <MovieCard movie={movie} key={movie.id} type='watched' />
            ))}
          </div>
        ) : (
          <h2 className='no-movies'>No watched movies in your list!</h2>
        )}
      </div>
    </div>
  );
};
