import React from 'react';
import './Carte.css';

function Carte({data}) {
    return (
        <div className='carte'>
            <h1> {data.nom} </h1>
            <p> {data.prenom} </p>
            <p> {data.age} </p>
        </div>
    )
}

export default Carte