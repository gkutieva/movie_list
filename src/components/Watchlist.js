import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { MovieCard } from '../components/MovieCard';

export const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);

  return (
    <div className='movie-page'>
      <div className='container'>
        <div className='header'>
          <div className='heading'></div>
          <span className='count-pill'>
            {watchlist.length} {watchlist.length === 1 ? 'Movie' : 'Movies'}
          </span>
        </div>
        {watchlist.length > 0 ? (
          <div className='movie-grid'>
            {watchlist.map((movie) => (
              <MovieCard movie={movie} key={movie.id} type='watchlist' />
            ))}
          </div>
        ) : (
          <h2 className='no-movies'>No movies in your watched list!</h2>
        )}
      </div>
    </div>
  );
};
