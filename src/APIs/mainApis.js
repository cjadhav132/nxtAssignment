import { setData } from '../actionReducers/reducer'

export const getData = () => async (dispatch) => {
    await fetch(
        "https://media-content.ccbp.in/website/react-assignment/resources.json"
    ).then(response => {
        if (response.status >= 400) {
            throw Error
        }
        return response.json()
    }).then(data => {
        // console.log(data)
        return dispatch(setData(data))
    })
}