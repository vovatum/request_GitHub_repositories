import {githubApi} from "../api/githubApi";
import {setFetchReposErrorAC} from "./errorsReducer";
import {isFetchingReposAC} from "./statusReducer";


const initialState = []

const SET_REPOS = 'SET_REPOS'


export const reposReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_REPOS: {
            let stateCopy = [...state]
            stateCopy = [...action.repos]
            return stateCopy
        }
        default:
            return state
    }
}

export const setReposAC = (repos) => {
    return {type: SET_REPOS, repos}
}

export const fetchReposTC = (userName, perPage, page) => (dispatch) => {
    dispatch(isFetchingReposAC(true))
    githubApi.getRepos(userName, perPage, page)
        .then(res => {
            if (res.data[0].owner.login === userName) {
                dispatch(setReposAC(res.data))
                dispatch(setFetchReposErrorAC(false))
                dispatch(isFetchingReposAC(false))
            }
        })
        .catch(() => {
            dispatch(setReposAC([]))
            dispatch(setFetchReposErrorAC(true))
            dispatch(isFetchingReposAC(false))

        })
}