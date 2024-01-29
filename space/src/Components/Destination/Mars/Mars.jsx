import React from 'react'
import './Mars.css'
import { Link, NavLink } from 'react-router-dom'

function Mars() {
  return (
    <div className='mars'>
        <Link to={"/destination"}> MOON </Link>
        <span> JE SUIS SUR LA PAGE DE MARS</span>
    </div>
  )
}

export default Mars