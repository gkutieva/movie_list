import React from 'react';
import { Link } from 'react-router-dom';
import { FaFilm } from "react-icons/fa";
import { MdMissedVideoCall } from "react-icons/md"
import { MdVisibility } from "react-icons/md"
import { MdAddToQueue } from "react-icons/md"


export const Header = () => {
  return (
    <header>
        <div className='container'>
            <div className='inner-container'>
                <div className='brand'>
                    <Link to='/'> <FaFilm />Movies</Link>
                </div>
                <ul className='nav-links'>
                    <li>
                        <Link to='/'><MdMissedVideoCall /> My Watchlist</Link>
                    </li>
                    <li>
                        <Link to='/watched'><MdVisibility /> Watched</Link>
                    </li>
                    <li>
                        <Link to='/add' className='btn'><MdAddToQueue /> Add Movie</Link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
  )
}
