const initialState = {
    darkMode: false,
    };
    function usersReducer(state = initialState, action) {
    switch (action.type) {
    case 'TOGGLEDARKMODE': {
        return {...state, darkMode: action.payload}
    }
    default:
    return state;
    }
    }
    export default usersReducer;