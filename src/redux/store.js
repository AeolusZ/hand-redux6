// import { applyMiddleware, combineReducers, createStore } from "redux";
import { applyMiddleware, combineReducers, createStore } from "../lib";
// import { reducer } from './reducer'
import reduxLogger from '../lib/redux-logger';
import reduxThunk from '../lib/redux-thunk'
import { reducer1, reducer2 } from "./reducer";

const allReducers = combineReducers({state1: reducer1, state2: reducer2})

export const store = createStore(allReducers, applyMiddleware(reduxThunk, reduxLogger));