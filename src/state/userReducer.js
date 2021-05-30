import {githubApi} from "../api/githubApi";
import {setFetchUserErrorAC} from "./errorsReducer";
import {isFetchingUserAC} from "./statusReducer";


const initialState = {}

const SET_USER = 'SET_USER'


export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER: {
            let stateCopy = {...state}
            stateCopy = {...action.user}
            return stateCopy
        }
        default:
            return state
    }
}

export const setUserAC = (user) => {
    return {type: SET_USER, user}
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

