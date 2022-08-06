import React, { useState, useEffect } from 'react';

const MOVIEURL = process.env.REACT_APP_TMDB_KEY;

export const Add = () => {

  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  const handleChange = () => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${MOVIEURL}&query=${search}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setResults(data.results);
      })
      .catch((error) => console.log(error.message));
  };

  useEffect(() => {
    if (search) {
      handleChange();
    }
  }, [search]);

  return (
    <div className='add-page'>
      <div className='container'>
        <div className='add-content'>
          <div className='input-wrapper'>
            <input
              type='text'
              placeholder='Search movie'
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
          </div>
          
          {/* {results.length > 0 ? "Length is greater than 0" : "length is 0"}
          {/* {results.length > 0 && (
            <ul className='results'>
              {results.map((movie) => (
                <li>
                  {movie.title}
                </li>
              ))}
            </ul>
              )} */}
        </div>

        <div className='results'>
          {results.length > 0
            ? results.map((result, idx) => <p key={idx}>{result.original_title}</p>)
            : 'No results found'}
        </div>
      </div>

    </div>
  );
};