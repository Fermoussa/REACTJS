import React from 'react';
import './Resultat.css';

function Resultat(props) {
    console.log(props.monchoix);
  return (
    <div className='ligneresultat'>
        <div className={props.monchoix}>{props.monchoix}</div>
        <button onClick={props.recommencer}> restart </button>
        <div className={props.choixia}> {props.choixia} </div>
    </div>

    
  )
}

export default Resultat