import React,{useState,useEffect} from 'react'
import Layout from "../../COMPONENTS/LAYOUT/Layout"
import UiCard from "../../COMPONENTS/UICARD/UiCard"

import "./Login.css"

import {  signin , isLoggedInUser} from '../../ACTIONS/Actions';

import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

function Login(props) {













    const[Email,SetEmail]=useState("")
    const[Password,SetPassword]=useState("")

    const dispatch=useDispatch()
    const auth=useSelector((state)=>{console.log(state,"state hai ye store ki")
        return(state.auth) })

    const userLogin = (e) => {
        e.preventDefault();
    
        if(Email == ""){
          alert("Email is required");
          return;
        }
        if(Password == ""){
          alert("Password is required");
          return;
        }
    
        dispatch( signin({ Email, Password }));
      
    
    
    
    
      }


      if(auth.authenticated){
        return(<Redirect to="/"></Redirect>)
    }
   
    return (
        <>
            <Layout>

                <div className="loginContainer">
                <UiCard>

                    <form onSubmit={userLogin}>

                        <input type="email" name="email" value={Email} 
                        onChange={(e)=>SetEmail(e.target.value)} placeholder="email"></input>

<input type="password" name="password" value={Password} 
                        onChange={(e)=>SetPassword(e.target.value)} placeholder="password"></input>
    <div><button>LOGIN</button></div>

                    </form>

                

                </UiCard>

 </div>

            </Layout>

        </>
    )
}

export default Login
