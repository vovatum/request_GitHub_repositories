import {githubApi} from "../api/githubApi";
import {setFetchReposErrorAC} from "./errorsReducer";
import {isFetchingReposAC} from "./statusReducer";


const initialState = {
    repos: [],
    currentPage: 1,
    perPage: 4
}

const SET_REPOS = 'SET_REPOS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

export const reposReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_REPOS:
            return {
                ...state,
                repos: [...action.repos]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.numPage
            }
        default:
            return state
    }
}

export const setReposAC = (repos) => {
    return {type: SET_REPOS, repos}
}
export const setCurrentPageAC = (numPage) => {
    return {type: SET_CURRENT_PAGE, numPage}
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