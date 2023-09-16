

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



export default {
    toggledarkmode, setActiveItem, setActiveSong, setHappyData
}