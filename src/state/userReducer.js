import {githubApi} from "../api/githubApi";
import {setFetchUserErrorAC} from "./errorsReducer";
import {setStatusAC} from "./statusReducer";


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
    dispatch(setStatusAC(false))
    return userName.length && githubApi.getUser(userName)
        .then(res => res.data.login === userName
            && dispatch(setUserAC(res.data))
            && dispatch(setFetchUserErrorAC(false)))
        .catch(() => dispatch(setFetchUserErrorAC(true)))

}

