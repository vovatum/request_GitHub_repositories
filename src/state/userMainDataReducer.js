import {githubApi} from "../api/githubApi";
import {setUserDataErrorAC} from "./userErrorDataReducer";

const initialState = {}

const SET_USER_MAIN_DATA = 'SET_USER_MAIN_DATA'


export const userMainDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_MAIN_DATA: {
            return action.userMainData
        }
        default:
            return state
    }
}

export const setUserMainDataAC = (userMainData) => {
    return {type: SET_USER_MAIN_DATA, userMainData}
}

export const fetchUserMainDataTC = (userName) => (dispatch) => {
    githubApi.getUserMainData(userName)
        .then(res => res.data.login === userName
            && dispatch(setUserMainDataAC(res.data))
            && dispatch(setUserDataErrorAC(false)))
        .catch(error => dispatch(setUserDataErrorAC(true)))
}

