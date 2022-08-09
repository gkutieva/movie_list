import React, { useContext } from 'react'
import { MdDisabledVisible } from 'react-icons/md';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { GlobalContext } from '../context/GlobalState';

export const MovieControls = ({ movie, type }) => {
    const { removeMovieFromWatchlist, addMovieToWatched, moveToWatchlist, removeFromWatchlist } = useContext(GlobalContext);
    return (
    <div className='inner-card-controls'>
        {type === 'watchlist' && (
            <>
                <button className='ctrl-btn' onClick={() => removeMovieFromWatchlist(movie.id)}>
                < MdDisabledVisible />
                </button>
                <button className='ctrl-btn' onClick={() => addMovieToWatched(movie)}>
                < MdOutlineRemoveRedEye />
                </button>
            </>
        )}
        {type === "watched" && (
            <>
            <button className='ctrl-btn' onClick={() => moveToWatchlist(movie)}>
            < MdDisabledVisible />
            </button>
            <button className='ctrl-btn' onClick={() => removeFromWatchlist(movie.id)}>
            < MdOutlineRemoveRedEye />
            </button>
        </>
        )}
    </div>
  )
}
