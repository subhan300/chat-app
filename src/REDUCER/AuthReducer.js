import {authConstanst} from "../ACTIONS/constant";

const InitialState={
  Id:"" , FirstName:"",LastName:"",Email:"",authenticating:false,authenticated:false,
  error:null
}

const AuthReducer=(state=InitialState,action)=>{

    console.log(action);

    switch(action.type){

        case `${authConstanst.USER_LOGIN}_REQUEST`:
            state = {
                ...state,
                authenticating: true
            }
            break;
        case `${authConstanst.USER_LOGIN}_SUCCESS`:
            state = {
                ...state,
                ...action.payload.user,
                authenticated: true,
                authenticating: false
            }
            break;
        case `${authConstanst.USER_LOGIN}_FAILURE`:
            state = {
                ...state,
                authenticated: false,
                authenticating: false,
                error: action.payload.error
            }
            break;
        case  `${authConstanst.USER_LOGOUT}_REQUEST`:
            break;
        case  `${authConstanst.USER_LOGOUT}_SUCCESS`:
                state={...InitialState}
                break
        }
  
    return state
}


export default AuthReducer;