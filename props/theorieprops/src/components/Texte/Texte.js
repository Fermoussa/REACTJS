import React from 'react'

function Texte(props) {
    console.log(props);
    return (
        <div>
            <h2> {props.title} </h2>
            {props.children}
        </div>
    )
}

export default Texte