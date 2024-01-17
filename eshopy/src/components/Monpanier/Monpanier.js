import React from 'react';
import './Monpanier.css'

function Monpanier(props) {
    // console.log(props.panier);
  return (
    <div className='contentpanier'> 
        <div className='panier'> Mon panier: </div>
        <div className='lepanier'>
            <h1>{props.panier}</h1>
        </div>
    </div>
    
  )
}

export default Monpanier