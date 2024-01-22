import React from 'react';
import './Liste.css';

function Liste(props) {

    // function supp(){
    //     // console.log(props.afaire[0]);
    //     props.setAfaire();
    //     setAfaire((props.afaire) => [...props.afaire, a] )
    // }

    return (
        <div className='feuille'>
            <h1> A faire: </h1>

            {
            props.afaire.map((item,index)=>(
                <div className='tache'>
                    <h1>{item}</h1>
                    <button onClick={props.supprimer}> delete </button>
                </div>
            ))
            }

        </div>
    )
}

export default Liste