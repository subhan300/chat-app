import React from 'react'
import "/home/muhammadsubhan/Desktop/react course from piaic bootcamp/classes/ready made ue it/chat app/src/COMPONENTS/UICARD/UiCard.css"
function UiCard(props) {
    return (
        <div className="card">
            {props.children}
        </div>
    )
}

export default UiCard
