import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from "redux-thunk";
import {userMainDataReducer} from "./userMainDataReducer";
import {userReposDataReducer} from "./userReposDataReducer";
import {userDataErrorReducer} from "./userErrorDataReducer";


const rootReducer = combineReducers({
    userMainData: userMainDataReducer,
    userReposData: userReposDataReducer,
    userDataError: userDataErrorReducer
})


export const store = createStore(rootReducer, applyMiddleware(thunk));

window.store = store;