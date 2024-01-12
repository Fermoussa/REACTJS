import React from 'react';
import './Punch.css';
import Progress from '../Progress/Progress';

function Punch(props) {
    function tappe(){
        props.set(props.life -10)
        console.log(props.life);
    }
    return (
        <button className='punch' onClick={()=>(tappe())}>Punch</button>
    )
}

export default Punch