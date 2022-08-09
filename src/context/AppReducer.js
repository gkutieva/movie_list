//function that returns some state data
export default(state, action) => {
    switch(action.type) {
        case "ADD_MOVIE_TO_WATCHLIST":
        return {
            ...state,
            watchlist: [action.payload, ...state.watchlist],
        };
        case "ADD_MOVIE_TO_WATCHED":
            return {
                ...state,
                watchlist: state.watchlist.filter(
                    (movie) => movie.id !== action.payload.id
                ),
                watched: [action.payload, ...state.watched],
            };
        case "REMOVE_MOVIE_FROM_WATCHLIST":
            return {
                ...state,
                watchlist: state.watchlist.filter(
                    (movie) => movie.id !== action.payload
                ),
            };
        default:
            return state;
    }
}