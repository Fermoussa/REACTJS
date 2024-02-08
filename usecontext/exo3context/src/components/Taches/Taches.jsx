import React, { useContext } from 'react'
import { Moncontext } from '../../App';
import './Taches.css';

function Taches() {
    const [tache, setTache] = useContext(Moncontext);

    function click(item){
        setTache([...tache], item.etat = !item.etat);
    }

    return (
        <div className='y'>
            {
                tache.map((item, index) => (
                    <div key={index} className='tache'>
                        <span> {item.nomtache}  </span>
                        <span className='statut'>{item.etat ? "terminé" : "pas terminé"}</span>
                        <input type="checkbox" onClick={()=>click(item)} />
                    </div>
                ))
            }
        </div>
    )
}

export default Taches