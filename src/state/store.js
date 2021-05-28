import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from "redux-thunk";
import {userReducer} from "./userReducer";
import {reposReducer} from "./reposReducer";
import {errorsReducer} from "./errorsReducer";
import {statusReducer} from "./statusReducer";


const rootReducer = combineReducers({
    user: userReducer,
    repos: reposReducer,
    errors: errorsReducer,
    status: statusReducer
})


export const store = createStore(rootReducer, applyMiddleware(thunk));

window.store = store;