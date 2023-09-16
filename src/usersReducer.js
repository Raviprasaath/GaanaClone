const initialState = {
    darkMode: true,
    activeItem: "",
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
        default:
            return state;
    }
}
export default usersReducer;