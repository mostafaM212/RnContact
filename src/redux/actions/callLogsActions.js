export const SET_CALLlOGS = 'SET_CALLlOGS';



export const setCallLogs = callLogs => dispatch => {
    
    const displayedCalls = callLogs.slice(0 , 150)
    dispatch({
        type: SET_CALLlOGS,
        callLogs : displayedCalls
    })
}