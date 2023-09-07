

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



export default {
    toggledarkmode, setActiveItem
}