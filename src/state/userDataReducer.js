import {githubApi} from "../api/githubApi";

const initialState = {}

const SET_USER_DATA = 'SET-USER-DATA'


export const userDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return action.userData
        }
        default:
            return state
    }
}


export const setUserDataAC = (userData) => {
    return {type: SET_USER_DATA, userData}
}

export const fetchUserDataTC = (userName) => dispatch => {
    githubApi.getUserData(userName).then(res => {
        const userData = {
            id:res.data.id,
            avatar:res.data.avatar_url,
            name: res.data.name,
            login: res.data.login,
            html: res.data.html_url,
            followers: res.data.followers_url,
            following: res.data.following_url,
            repos: res.data.public_repos
        }
        dispatch(setUserDataAC(userData))
    })
}
