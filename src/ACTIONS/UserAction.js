import {UserConstants} from "./constant"


import firebase from "firebase/app"



export const getRealTimeUsers=(Id)=>{
    return async (dispatch)=>{
      const db=firebase.firestore()
   db.collection("USERS")
//    .where("state", "==", "CA")
      .onSnapshot(function(querySnapshot) {
          var USERS = [];
          querySnapshot.forEach(function(doc) {
             if( doc.data().Id != Id){
              USERS.push(doc.data());
             }
          });
          console.log(USERS);
          dispatch({type:`${UserConstants.GET_REALTIME_USERS}.SUCCESS`,payload:{USERS}})

      });
  
    }
}