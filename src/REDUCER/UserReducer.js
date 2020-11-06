

import {UserConstants} from "../ACTIONS/constant"
const InitialState={USERS_ONLINE:[]}
export const UserReducers=(state=InitialState,action)=>{
    console.log(action.payload,"ACTION USER WALA KA")
    switch(action.type){
        case `${UserConstants}.REQUESTS`:
            break;
        case `${UserConstants.GET_REALTIME_USERS}.SUCCESS`:
            console.log(action.payload.USERS,"YEH SELAL")
            state={...state,USERS_ONLINE:action.payload.USERS_ONLINE}
            break
            

    }
    return state
    console.log(state,"dekj yeh")
}