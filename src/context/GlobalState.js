//create context to access the data
//stores the state data
import React, { createContext, useEffect, useReducer } from 'react';
import AppReducer from './AppReducer';

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const initialState = {
    watchlist: localStorage.getItem('watchlist')
      ? JSON.parse(localStorage.getItem('watchlist'))
      : [],
    watched: localStorage.getItem('watched')
      ? JSON.parse(localStorage.getItem('watched'))
      : [],
  };
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(state.watchlist));
    localStorage.setItem('watched', JSON.stringify(state.watched));
  }, [state]);

  const addMovieToWatchlist = (movie) => {
    dispatch({ type: 'ADD_MOVIE_TO_WATCHLIST', payload: movie });
  };

  const addMovieToWatched = (movie) => {
    dispatch({ type: 'ADD_MOVIE_TO_WATCHED', payload: movie });
  };

  const removeMovieFromWatchlist = (id) => {
    dispatch({ type: 'REMOVE_MOVIE_FROM_WATCHLIST', payload: id });
  };

  const moveToWatchlist = (movie) => {
    dispatch({ type: 'MOVE_TO_WATCHLIST', payload: movie });
  };

  const removeFromWatched = (id) => {
    dispatch({ type: 'REMOVE_FROM_WATCHED', payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addMovieToWatchlist: addMovieToWatchlist,
        addMovieToWatched: addMovieToWatched,
        removeMovieFromWatchlist: removeMovieFromWatchlist,
        moveToWatchlist: moveToWatchlist,
        removeFromWatched: removeFromWatched,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
