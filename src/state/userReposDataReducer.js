import {githubApi} from "../api/githubApi";
import {setUserDataErrorAC} from "./userErrorDataReducer";


const initialState = []

const SET_USER_REPOS_DATA = 'SET_USER_REPOS_DATA'


export const userReposDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_REPOS_DATA:
            return {
                ...state,
                userReposData: action.userReposData
            }
        default:
            return state
    }
}

export const setUserReposDataAC = (userReposData) => {
    return {type: SET_USER_REPOS_DATA, userReposData}
}

export const fetchUserReposDataTC = (userName) => (dispatch) => {
    githubApi.getUserReposData(userName)
        .then(res => res.data.length && dispatch(setUserReposDataAC(res.data)))
        .catch(error => dispatch(setUserDataErrorAC('Repository list is empty')))
}


