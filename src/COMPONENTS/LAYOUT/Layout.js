import React from 'react'
import Header from "../HEADER/Header"
function Layout(props) {
    return (
        <div>

          <Header />
            {props.children}
            
        </div>
    )
}

export default Layout
