import React, { useState } from 'react';


export const Add = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const handleSubmit = (event) => {
  event.preventDefault();
  console.log(search);

    const MOVIEURL = process.env.REACT_APP_TMDB_KEY;

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${MOVIEURL}&query=${search}`)
    .then(res => res.json())
    .then(data => {
      setResults(data.results);
      console.log(data.results);
      console.log(results);
    })
    .catch(error => {
      console.log(error.message);
      // setResults([]);
    })
  }




  return (
    <div className='add-page'>
      <div className='container'>
        <div className='add-content'>
          <div className='input-wrapper'>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder='Search movie' value={search} onChange={(event) => {
                setSearch(event.target.value);
              }}/>
              <button type='submit'>sumbit</button>
            </form>
          </div>
          
          {results.length > 0 ? "Length is greater than 0" : "length is 0"}
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
      </div>

    </div>

  )
}
