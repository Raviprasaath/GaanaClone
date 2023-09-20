const initialState = {
    darkMode: true,
    activeItem: "Home",
    activeSong: {},
    happySong: [],
};

function usersReducer(state = initialState, action) {
    switch (action.type) {
        case 'TOGGLEDARKMODE': {
            return { ...state, darkMode: action.payload }
        }
        case 'SET_ACTIVE_ITEM': {
            return { ...state, activeItem: action.payload }
        }
        case 'SET_ACTIVE_SONG': {
            return { ...state, activeSong: action.payload }
        }
        case 'SET_HAPPY_SONG': {
            return { ...state, happySong: action.payload }
        }
        case 'SET_ROMANTIC_SONG': {
            return { ...state, romanticSong: action.payload }
        }
        case 'SET_TRENDING_SONG': {
            return { ...state, trendingSong: action.payload }
        }
        case 'SET_SAD_SONG': {
            return { ...state, sadSong: action.payload }
        }
        case 'SET_EXCITED_SONG': {
            return { ...state, excitedSong: action.payload }
        }
        case 'SET_ALL_SONGS': {
            return { ...state, allSongs: action.payload }
        }
        default:
            return state;
    }
}
export default usersReducer;