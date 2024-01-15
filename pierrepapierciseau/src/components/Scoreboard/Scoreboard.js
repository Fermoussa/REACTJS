import React from 'react';
import './Scoreboard.css';

function Scoreboard(props) {
  return (
    <div className='tableauScore'>
        <div className="titre">
            <span> ROCK </span>
            <span> PAPPER </span>
            <span> SCISSORS </span>
        </div>

        <div className="score">
            <span>Score</span>
            <span> {props.score} </span>
        </div>
    </div>
  )
}

export default Scoreboard