const initialState = {
    // fetchUserError: false,
    // fetchReposError: false
}

const SET_FETCH_USER_ERROR = 'SET_FETCH_USER_ERROR'
const SET_FETCH_REPOS_ERROR = 'SET_FETCH_REPOS_ERROR'


export const errorsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FETCH_USER_ERROR:
            return {
                ...state,
                fetchUserError: action.error
            }
        case SET_FETCH_REPOS_ERROR:
            return {
                ...state,
                fetchReposError: action.error
            }
        default:
            return state
    }
}

export const setFetchUserErrorAC = (error) => {
    return {type: SET_FETCH_USER_ERROR, error}
}
export const setFetchReposErrorAC = (error) => {
    return {type: SET_FETCH_REPOS_ERROR, error}
}
