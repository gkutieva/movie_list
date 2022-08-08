//create context to access the data
//stores the state data
import React, { createContext, useEffect, useReducer } from "react";
import   AppReducer   from './AppReducer';

//initial state
const initialState = {
    watchlist: localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem('watchlist')) : [],
    watched: localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')) : [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        // watchlist.length > 0 && { localStorage.setItem('watchlist', JSON.stringify(state.watchlist));}
        // do same thing for both! 
        localStorage.setItem('watchlist', JSON.stringify(state.watchlist));
        localStorage.setItem('watched', JSON.stringify(state.watched));
    }, [state])

    const addMovieToWatchlist = (movie) => {
        dispatch({type: "ADD_MOVIE_TO_WATCHLIST", payload: movie});
    }

    const addMovieToWatched = (movie) => {
        dispatch({type: "ADD_MOVIE_TO_WATCHED", payload: movie});
    }


    return(
        <GlobalContext.Provider value={{watchlist: state.watchlist, watched: state.watched, addMovieToWatchlist: addMovieToWatchlist, addMovieToWatched:addMovieToWatched }}>
            {props.children}
        </GlobalContext.Provider>
    )
}
