import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({component: Component, ...rest}) => {
  return(
    <Route {...rest} component={(props) => {
        const user = localStorage.getItem('USERS') ? JSON.parse(localStorage.getItem('USERS')) : null;

        if(user){
            return <Component {...props} />
        }else{
            return <Redirect to={`/SignUp`} />
        }

    }} />
   )

 }

export default PrivateRoute