import firebase from "firebase"

import {authConstanst} from "./constant"
import { auth } from "firebaseui"

// export const RegisterForSignUp=(user)=>{
//     return async (dispatch)=>{
//         const db=firestore()
//         auth().createUserWithEmailAndPassword(user.email,user.password)
//         .then(user=>console.log(user))
//         .catch(error=>{console.log(error)})
//     }
// }

export const RegisterForSignUp = (user) => {


    return async (dispatch) => {
        console.log("dispatch",dispatch)

        const db =firebase.firestore()
        dispatch({type: `${authConstanst.USER_LOGIN}_REQUEST`});

        

       await  firebase.auth().createUserWithEmailAndPassword(user.Email, user.Password)
    
        .then(data => {
            console.log(data,"data")
            const currentUser = firebase.auth().currentUser;
            const name=`${user.FirstName} ${user.LastName}`;
            currentUser.updateProfile({displayName:name})
            return(data)
          


        }).then((data)=>{
       
          
            db.collection("USERS").add({FirstName:user.FirstName,LastName:user.LastName,
                isOnline:true,Date:new Date(),
         Id:data.user.uid,Description:{src:"my image code",descriptions:"hey this is my product",price:3949}})
        }).then((d)=>{const loged_In_User={FirstName:user.FirstName,LastName:user.LastName,
            Email:user.Email,Id:d.user.uid
         }
         console.log(d.user.uid,"yeh i hai")
        console.log(loged_In_User,"loged")
    localStorage.setItem("USERS",JSON.stringify(loged_In_User))
    dispatch({
        type: `${authConstanst.USER_LOGIN}_SUCCESS`,
        payload: { user: loged_In_User }
        
    })}).catch(error=>{console.log(error)})
    }


    

}

export const signin = (user) => {
    console.log(user,"user dekh yeh wala")
    return async dispatch => {

        dispatch({ type: `${authConstanst.USER_LOGIN}_REQUEST` });
        await firebase.auth()
        .signInWithEmailAndPassword(user.Email, user.Password)
        .then((data) => {
            console.log(data)
           const displayname=data.user.displayName.split(" ");
            const FirstName=displayname[0];
            const LastName=displayname[1];
            const loged_In_User={FirstName,LastName,Email:user.Email,Id:data.user.uid}
            localStorage.setItem("USERS",JSON.stringify(loged_In_User));
            dispatch({type:`${authConstanst.USER_LOGIN}_SUCCESS`,payload:{user:loged_In_User}})
         }).catch(error=>{console.log(error)})


        }

    }


    export const isLoggedInUser=()=>{
        return async dispatch=>{
         const user=localStorage.getItem("USERS")?JSON.parse(localStorage.getItem("USERS")):null;
            if(user){
                dispatch({type:`${authConstanst.USER_LOGIN}_SUCCESS`,payload:{user}})

            }
            else{
                dispatch({type:`${authConstanst.USER_LOGIN}_FAILURE`,payload:{error:"logged in again"}})
            }
        }
    } 


export const LogOutFunction=(Id)=>{
    return async dispatch=>{
        dispatch({type:`${authConstanst.USER_LOGOUT}_REQUEST`})
        const db=firebase.firestore();
        db.collection("USERS").doc(Id).set({isOnline:false}).then(()=>{

         firebase.auth().signOut().then(()=>{

        localStorage.clear();
            dispatch({type:`${authConstanst.USER_LOGOUT}_SUCCESS`})
        })  .catch(error => {
            console.log(error);
            dispatch({ type: `${authConstanst.USER_LOGOUT}_FAILURE`, payload: { error } })
        })

        })

 
    }

}