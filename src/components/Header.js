import React from 'react';
import { Link } from 'react-router-dom';


export const Header = () => {
  return (
    <header>
        <div className='container'>
            <div className='inner-container'>
                <div className='brand'>
                    <Link to='/'>HC Movies 🎞</Link>
                </div>
                <ul className='nav-links'>
                    <li>
                        <Link to='/'>My Movies</Link>
                    </li>
                    <li>
                        <Link to='/watched'>Watched</Link>
                    </li>
                    <li>
                        <Link to='/add' className='btn'> Add Movie</Link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
  )
}
