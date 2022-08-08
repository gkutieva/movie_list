import React from 'react'
import { MdDisabledVisible } from 'react-icons/md';
import { MdOutlineRemoveRedEye } from 'react-icons/md';

export const MovieControls = ({ movie, type }) => {
  return (
    <div className='inner-card-controls'>
        {type === 'watchlist' && (
            <>
                <button className='ctrl-btn'  onClick={(< MdDisabledVisible />)}>
                </button>
                <button className='ctrl-btn' onClick={(< MdOutlineRemoveRedEye />)}>
                </button>
            </>
        )}
    </div>
  )
}
