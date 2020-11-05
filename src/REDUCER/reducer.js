import { combineReducers,createStore } from 'redux'
import AuthReducer from "./AuthReducer"

const RootReducer=combineReducers(
    {auth:AuthReducer}
)

export default RootReducer