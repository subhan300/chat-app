import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from "firebase/app";
import {Provider} from "react-redux"
import store from "./Store/StoreR"
import "firebase/auth";
import "firebase/firestore";
// import StyledFirebaseAuth from 'firebase/reactFirebaseui/StyledFirebaseAuth';
var firebaseConfig = {
    apiKey: "AIzaSyAPnhoRzXhC4bQkNPdQzzHuog0Pz6ScNXo",
    authDomain: "chatapp-f1942.firebaseapp.com",
    databaseURL: "https://chatapp-f1942.firebaseio.com",
    projectId: "chatapp-f1942",
    storageBucket: "chatapp-f1942.appspot.com",
    messagingSenderId: "911571787129",
    appId: "1:911571787129:web:9de591ed399bdc5afce3a8",
    measurementId: "G-KPXCBX5BEN"
  };

firebase.initializeApp(firebaseConfig);
Window.store=store 
// yeh boht achi cheez hai ap dekhsaktay ko k apkay store mai kia hai, console parliko Window.store.getState()
// export const auth = firebase.auth();
// export const firestore = firebase.firestore();
ReactDOM.render(
     <Provider store={store}> 
  <React.StrictMode>
   <App />

</React.StrictMode>

     </Provider> 
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
