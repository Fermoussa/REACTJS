import React from 'react'
import './Carte.css'
import data from '../../donnee.json'

function Carte() {
    
  return (
    <div className='carte'>
        <p> 
            {data[0].title}
            {data[0].timeframes.daily.current}
        </p>
    </div>
  )
}

export default Carte