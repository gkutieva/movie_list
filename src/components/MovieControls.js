import React, { useContext } from 'react'
import { MdDisabledVisible } from 'react-icons/md';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { GlobalContext } from '../context/GlobalState';
import { BiTrash } from 'react-icons/bi';

export const MovieControls = ({ movie, type }) => {
    const { removeMovieFromWatchlist, addMovieToWatched, moveToWatchlist, removeFromWatched } = useContext(GlobalContext);
    return (
    <div className='inner-card-controls'>
        {type === 'watchlist' && (
            <>
                <button className='ctrl-btn' onClick={() => removeMovieFromWatchlist(movie.id)}>
                < BiTrash />
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
            <button className='ctrl-btn' onClick={() => removeFromWatched(movie.id)}>
            < BiTrash />
            </button>
        </>
        )}
    </div>
  )
}
