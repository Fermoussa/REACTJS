import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Moncontext } from '../../App'

function Acceuil() {
  const[nom, mail, setName, setMail] = useContext(Moncontext);
  return (
    <div>
      <h1> Recapitulatif: </h1>
      <Link to={"form"}> Formulaire: </Link>
      <h1> Name: {nom} </h1>
      <h1> Email: {mail} </h1>
    </div>
  )
}

export default Acceuil