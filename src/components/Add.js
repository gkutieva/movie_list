import React, { useState } from 'react';


export const Add = () => {
  const [search, setSearch] = useState("");

  const onChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);

    const MOVIEURL = process.env.REACT_APP_TMDB_KEY;

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${MOVIEURL}&query=${search}`)
    .then(res => res.json())
    .then(data => {
    
      console.log(data);

    })
    .catch(error => 
      console.log(error.message))
  }




  return (
    <div className='add-page'>
      <div className='container'>
        <div className='add-content'>
          <div className='input-wrapper'>
              <input type="text" placeholder='Search movie' value={search} onChange={onChange}/>
          </div>
        </div>
      </div>
    </div>
  )
}
