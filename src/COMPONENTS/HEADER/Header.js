import React from 'react'
import { NavLink,Link} from "react-router-dom";
import "./Header.css"
import {useSelector,useDispatch} from "react-redux"
import { LogOutFunction } from '../../ACTIONS/Actions';
function Header(props) {
  const auth=useSelector(s=>s.auth)
   const dispatch = useDispatch()
  //  const Log_Out_On_Click=()=>{
  //    dispatch((LogOutFunction()))
  //  }
    return (
        <>

<header className="header">
        <div style={{display: 'flex'}}>
          <div className="logo">Web Messenger</div>
            
           
          
                { !auth.authenticated ?     
                
                <ul className="leftMenu">
                <li><NavLink to={'/login'}>Login</NavLink></li>
                <li><NavLink to={'/signup'}>Sign up</NavLink></li>
              </ul>  : null

                
                
                }
              
       

            
        </div>


        <div style={{margin: '20px 0', color: '#fff', fontWeight: 'bold'}}>
            {auth.authenticated ? `Hi ${auth.FirstName} ${auth.LastName}` : ''}
          </div>
        <ul className="menu">

            {
              auth.authenticated ?
              <Link to={"#"} onClick={() => {
                dispatch(LogOutFunction(auth.Id))
              }}>Logout</Link> : null
            }
          
            
             
        </ul>
     
    </header>


        </>
    )
}

export default Header
