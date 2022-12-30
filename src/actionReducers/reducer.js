const initialState = {
    businesses: null
}

const SET_DATA = "setData"

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA:
            return { businesses: action.data }
        default:
            return state

    }
}

export const setData = (data) => {
    return {
        type: SET_DATA,
        data
    }
}

export default reducer