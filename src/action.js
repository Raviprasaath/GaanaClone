

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



export default {
    toggledarkmode, setActiveItem, setActiveSong, setHappyData, setRomanticData, setTrendingData, setSadSongData, setExcitedData, setAllSongsData
}
