import React, { useEffect } from 'react'

function Newtache(props) {

    // function valeur(e) {
    //     if (e.key === 'Enter') {
    //         let a = e.target.value;
    //         // props.setAfaire(e.target.value);
    //         props.setAfaire((props.afaire) => [...props.afaire], a);
    //         // console.log(props.afaire);
    //     }
    // }

    // useEffect(()=>{
    //     console.log(props.afaire);
    // },[props.afaire])

    return (
        <div>
            <input type="text" placeholder='entre tache' onKeyDown={props.valeur} />
        </div>
    )
}

export default Newtache