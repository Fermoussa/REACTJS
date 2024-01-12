import React from 'react'
import './Restart.css'

function Restart(props) {
    function recommencer(){
        props.set(100);
    }

  return (
    <button className='restart' onClick={()=>(recommencer())}> Restart </button>
  )
}

export default Restart