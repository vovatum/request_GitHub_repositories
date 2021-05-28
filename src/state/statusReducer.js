const initialState = {
    start: true
        // 'Start with searching a GitHub user',
    // notUser: 'User not found',
    // emptyRepos: 'Repository is empty'
}

const SET_START = 'SET_START'


export const statusReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_START: {
            let stateCopy = {...state}
            stateCopy = {...action.user}
            return stateCopy
        }
        default:
            return state
    }
}

export const setStatusAC = (status) => {
    return {type: SET_START, status}
}

