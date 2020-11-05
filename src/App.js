import React,{useEffect} from "react"
import {Route,BrowserRouter as Router,Switch,Redirect} from "react-router-dom"
import Home from "./PAGES/HOME/Home.js"
// import Chat from "./PAGES/CHAT/Chat.js"
import Signup from "./PAGES/SIGNUP/Signup.js"
import Login from "./PAGES/LOGIN/Login.js"
// import Profile from "./PAGES/PROFILE/Profile.js"
import PrivateRoute from "./COMPONENTS/PrivateRoute"

import {toast,ToastContaier} from "react-toastify"
import {   isLoggedInUser} from './ACTIONS/Actions';

import { useDispatch, useSelector } from 'react-redux';


function App(){
    const auth = useSelector(state => state.auth);
    const dispatch=useDispatch()
    useEffect(() => {
        if(!auth.authenticated){
          dispatch(isLoggedInUser())
        }
      }, []);
    
    
    return(
        <>

<Router>
    <Switch>
    <PrivateRoute path="/" exact component={Home}></PrivateRoute>
        <Route path="/signup"   component={Signup}></Route>
        <Route path="/login"   component={Login}></Route>
    </Switch>
</Router>


        </>
    )
}

export default App