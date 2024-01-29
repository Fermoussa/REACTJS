import React from 'react';
import './Destination.css';
import { Link, NavLink } from 'react-router-dom';

function Destination() {
  return (
    <div className='destination'> 
      <span> JE SUIS SUR LA PAGE MOON </span>
      <Link to={"/destination/mars"}> MARS </Link>
    </div>
  )
}

export default Destination