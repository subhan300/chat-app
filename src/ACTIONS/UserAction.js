import {UserConstants} from "./constant"


import firebase from "firebase/app"



export const getRealTimeUsers=(Id)=>{
    return async (dispatch)=>{
      const db=firebase.firestore()
 const unsubscribe=  db.collection("USERS_ONLINE")
//    .where("state", "==", "CA")
      .onSnapshot(function(querySnapshot) {
          const USERS_ONLINE = [];
          querySnapshot.forEach(function(doc) {
             if( doc.data().Id != Id){
              USERS_ONLINE.push(doc.data());
             }else{return (null)}
          });
          console.log(USERS_ONLINE);
          dispatch({type:`${UserConstants.GET_REALTIME_USERS}.SUCCESS`,payload:{USERS_ONLINE}})

      });
      return unsubscribe
  
    }
  
}