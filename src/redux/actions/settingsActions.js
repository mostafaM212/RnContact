export const SET_COLOR = 'SET_COLOR';

export const setColor = (color) =>dispatch => {
    

    dispatch({
        type: SET_COLOR,
        color : color
    })
}