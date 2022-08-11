import React from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from './NavBar';

export const Header = () => {
  return (
    <header>
        <div className='container'>
            <div className='inner-container'>
            <NavBar />
                <div className='brand'>
                    <Link to='/' className='flixnet'>FLIX<span className='span-tag'>net</span>🎞</Link>
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
