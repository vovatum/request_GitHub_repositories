import {githubApi} from "../api/githubApi";
import {setFetchUserErrorAC} from "./errorsReducer";
import {isFetchingUserAC} from "./statusReducer";


const initialState = {
    user: {},
    userName: ''
}

const SET_USER = 'SET_USER'
const SET_USER_NAME = 'SET_USER_NAME'

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.user
            }
        case SET_USER_NAME:
            return {
                ...state,
                userName: action.userName
            }
        default:
            return state
    }
}

export const setUserAC = (user) => {
    return {type: SET_USER, user}
}
export const setUserNameAC = (userName) => {
    return {type: SET_USER_NAME, userName}
}

export const fetchUserTC = (userName) => (dispatch) => {
    dispatch(isFetchingUserAC(true))
    return githubApi.getUser(userName)
        .then(res => {
            if (res.data.login === userName) {
                dispatch(setUserAC(res.data))
                dispatch(setFetchUserErrorAC(false))
                dispatch(isFetchingUserAC(false))
            }
        })
        .catch(() => {
            dispatch(setUserAC({}))
            dispatch(setFetchUserErrorAC(true))
            dispatch(isFetchingUserAC(false))
        })
}

