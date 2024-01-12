import React from 'react';
import './Progress.css'

function Progress(props) {
  return (
    <div className='progress'>
        <span> hp : {props.vie} </span>
    </div>
  )
}

export default Progress