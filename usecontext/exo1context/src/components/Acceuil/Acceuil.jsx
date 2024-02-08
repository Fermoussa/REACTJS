import React, { useContext, useState } from 'react'
import { Moncontext } from '../../App'

function Acceuil() {
    const[username,theme] = useContext(Moncontext);

  return (
    <div>
        <h1> Username: {username} </h1>
        <h1> Theme: {theme} </h1>
    </div>
  )
}

export default Acceuil