import React from 'react';
import './Choixjoueur.css';
import feuille from '../../assets/icon-paper.svg';

function Choixjoueur(props) {

    return (
        <div className='contentChoix'>
            <div className="lignehaut">
                <div className='f'onClick={props.monchoix}> f </div>
                {/* <div className='f' onClick={() => { props.setVerif(false); props.monchoix; }}> f </div> */}
                <div className='c' onClick={props.monchoix}> c </div>
            </div>

            <div className="milieu">
                <span className='bord'>{props.test}</span>
            </div>

            <div className="lignebas">
                <div className='p' onClick={props.monchoix}> p </div>
            </div>
        </div>
    )
}

export default Choixjoueur