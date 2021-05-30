const initialState = {
    isFetchingUser: false,
    isFetchingRepos: false,
}

const IS_FETCHING_USER = 'IS_FETCHING_USER'
const IS_FETCHING_REPOS = 'IS_FETCHING_REPOS'


export const statusReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_FETCHING_USER:
            return {
                ...state,
                isFetchingUser: action.isFetching
            }
        case IS_FETCHING_REPOS:
            return {
                ...state,
                isFetchingRepos: action.isFetching
            }
        default:
            return state
    }
}

export const isFetchingUserAC = (isFetching) => {
    return {type: IS_FETCHING_USER, isFetching}
}
export const isFetchingReposAC = (isFetching) => {
    return {type: IS_FETCHING_REPOS, isFetching}
}
