const initialState = {
    darkMode: true,
    activeItem: "Home",
    activeSong: {},
    happySong: [],
    romanticSong: [],
    trendingSong: [],
    soulSongs: [],

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
        case 'SET_SOUL_SONG': {
            return { ...state, soulSongs: action.payload }
        }
        case 'SET_EVERGREEN_SONG': {
            return { ...state, evergreen: action.payload }
        }
        case 'SET_TOP20_SONG': {
            return { ...state, top20: action.payload }
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
        case 'SET_ALBUM_SONGS': {
            return { ...state, albumSongs: action.payload }
        }
        case 'SET_SEARCH_RESULT_SONGS': {
            return { ...state, resultSongs: action.payload }
        }
        case 'SET_ALL_SEARCH_RESULT_SONGS': {
            return { ...state, resultData: action.payload }
        }
        case 'SET_ALL_FAV_SONGS': {
            return { ...state, allfavSongData: action.payload }
        }
        case 'SET_FAV_SONG_UI_UPDATE': {
            return { ...state, favSongUiUpdate: action.payload }
        }
        case 'SET_ARTIST_PAGE_1': {
            return { ...state, artistPage1: action.payload }
        }
        
        case 'SET_ARTIST_PAGE_2': {
            return { ...state, artistPage2: action.payload }
        }
        
        case 'SET_ARTIST_CARD_RENDER': {
            return { ...state, artistPageCardRender: action.payload }
        }
        


        default:
            return state;
    }
}
export default usersReducer;