const initialState = {
    fetchDataError: false
}

const SET_USER_DATA_ERROR = 'SET_USER_DATA_ERROR'


export const userDataErrorReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA_ERROR:
            return {
                ...state,
                fetchMainDataError: action.error
            }
        default:
            return state
    }
}

export const setUserDataErrorAC = (error) => {
    return {type: SET_USER_DATA_ERROR, error}
}
