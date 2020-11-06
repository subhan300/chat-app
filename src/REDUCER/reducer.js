import { combineReducers,createStore } from 'redux'
import AuthReducer from "./AuthReducer"
import {UserReducers} from "./UserReducer"


const RootReducer=combineReducers(
    {auth:AuthReducer,
    ALL_USERS:UserReducers}
)

export default RootReducer