const initialState = {
    darkMode: true,
    activeItem: "",
};

function usersReducer(state = initialState, action) {
    switch (action.type) {
        case 'TOGGLEDARKMODE': {
            return { ...state, darkMode: action.payload }
        }
        case 'SET_ACTIVE_ITEM': {
            return { ...state, activeItem: action.payload }
        }
        default:
            return state;
    }
    
}
export default usersReducer;