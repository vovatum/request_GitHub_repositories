import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from "redux-thunk";
import {userDataReducer} from "./userDataReducer";


const rootReducer = combineReducers({
    userData: userDataReducer,
    // userRepos: userReposReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));

window.store = store;