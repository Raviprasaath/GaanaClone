

const toggledarkmode = (flag) => {
    return {
        type: "TOGGLEDARKMODE",
        payload: flag
    }
}

const setActiveItem = (item) => {
    return {
        type: "SET_ACTIVE_ITEM",
        payload: item
    }
}

const setActiveSong = (item) => {
    return {
        type: "SET_ACTIVE_SONG",
        payload: item
    }
}

const setHappyData = (item) => {
    return {
        type: "SET_HAPPY_SONG",
        payload: item
    }
}

const setRomanticData = (item) => {
    return {
        type: "SET_ROMANTIC_SONG",
        payload: item
    }
}

const setTrendingData = (item) => {
    return {
        type: "SET_TRENDING_SONG",
        payload: item
    }
}

const setSoulSongsData = (item) => {
    return {
        type: "SET_SOUL_SONG",
        payload: item
    }
}

const setEvergreenData = (item) => {
    return {
        type: "SET_EVERGREEN_SONG",
        payload: item
    }
}

const setTop20Data = (item) => {
    return {
        type: "SET_TOP20_SONG",
        payload: item
    }
}

const setSadSongData = (item) => {
    return {
        type: "SET_SAD_SONG",
        payload: item
    }
}

const setExcitedData = (item) => {
    return {
        type: "SET_EXCITED_SONG",
        payload: item
    }
}

const setAllSongsData = (item) => {
    return {
        type: "SET_ALL_SONGS",
        payload: item
    }
}

const setAlbumData = (item) => {
    return {
        type: "SET_ALBUM_SONGS",
        payload: item
    }
}

const setSearchResultData = (item) => {
    return {
        type: "SET_SEARCH_RESULT_SONGS",
        payload: item
    }
}
const setAllSearchResultData = (item) => {
    return {
        type: "SET_ALL_SEARCH_RESULT_SONGS",
        payload: item
    }
}

const setAllFavSongs = (item) => {
    return {
        type: "SET_ALL_FAV_SONGS",
        payload: item
    }
}

const setFavSongUiUpdate = (item) => {
    return {
        type: "SET_FAV_SONG_UI_UPDATE",
        payload: item
    }
}

const setArtistPage1 = (item) => {
    return {
        type: "SET_ARTIST_PAGE_1",
        payload: item
    }
}

const setArtistPage2 = (item) => {
    return {
        type: "SET_ARTIST_PAGE_2",
        payload: item
    }
}

const setArtistCardsRender = (item) => {
    return {
        type: "SET_ARTIST_CARD_RENDER",
        payload: item
    }
}





export default {
    toggledarkmode, setActiveItem, setActiveSong, setHappyData, 
    setRomanticData, setTrendingData, setSadSongData, setExcitedData, 
    setAllSongsData, setAlbumData, setSoulSongsData, setEvergreenData,
    setTop20Data, setSearchResultData, setAllSearchResultData,
    setAllFavSongs, setFavSongUiUpdate, setArtistPage1, setArtistPage2,
    setArtistCardsRender
}
