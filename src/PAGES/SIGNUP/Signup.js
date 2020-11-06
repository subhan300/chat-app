import React,{useState} from 'react'
import Layout from "../../COMPONENTS/LAYOUT/Layout"
import "./signup.css"
import UiCard from "../../COMPONENTS/UICARD/UiCard"
import {RegisterForSignUp} from "../../ACTIONS/Actions"
import {useDispatch,useSelector} from "react-redux"
import {Redirect} from "react-router-dom"
const Signup=(props)=> {

  const dispatch=useDispatch()

  const auth=useSelector((state)=>{console.log(state)
    return(state.auth) })
    
    const[FirstName,SetFirstName]=useState("")
    const[LastName,SetLastName]=useState("")
    const[Email,SetEmail]=useState("")
    const[Password,SetPassword]=useState("")


  
    const onSubmit=(e)=>{
        e.preventDefault();
        const user={
            FirstName,LastName,Email,Password
        }
        // console.log(user,"usercheck")
   
        dispatch(RegisterForSignUp(user))

    }
    if(auth.authenticated){
        return(<Redirect to="/"></Redirect>)
    }
    return (
        <div >
           <Layout>
               <div className="registerContainer">
                 <UiCard>
                     <form onSubmit={onSubmit}>
                         <h1>form up</h1>
                         <input type="text" name="FirstName" value={FirstName} 
                        onChange={(e)=>SetFirstName(e.target.value)} placeholder="FirstName"></input>

<input type="text" name="LastName" value={LastName} 
                        onChange={(e)=>SetLastName(e.target.value)} placeholder="LastName"></input>

                         <input type="email" name="email" value={Email} 
                        onChange={(e)=>SetEmail(e.target.value)} placeholder="email"></input>

<input type="password" name="password" value={Password} 
                        onChange={(e)=>SetPassword(e.target.value)} placeholder="password"></input>


                        <div ><button>SIGN UP</button></div>
                     </form>
                     
                     
                     
                     </UiCard>
               </div>
           </Layout>
        </div>
    )
}

export default Signup
