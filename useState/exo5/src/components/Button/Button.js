import React from 'react'

function Button() {
    function clique(){
        alert("tu as cliqué!")
    }
    return (
        <button onClick={clique}> Clique </button>
    )
}

export default Button