import React from 'react'
import './Jeremy.css';
import tete from '../../assets/image-jeremy.png';
import Cartes from '../Cartes/Cartes';


function Jeremy(props) {


    return (
        <div className='cartejeremy'>
            <div className="hautjeremy">
                <img src={tete} className="tete" alt="" />
                <span className='report'> Report for </span>
                <span className='nom'> Jeremy </span>
                <span className='nom famille'> Robson </span>

            </div>

            <div className="basjeremy">
                <span onClick={()=> props.setPeriode('daily')}> Daily </span>
                <span onClick={()=> props.setPeriode('weekly')}> Weekly </span>
                <span onClick={()=> props.monthly()}> Monthly </span>
{/* 
                <span onClick={()=> props.setPeriode('daily')}> Daily </span>
                <span onClick={()=> props.setPeriode('weekly')}> Weekly </span>
                <span onClick={()=> props.setPeriode('monthly')}> Monthly </span> */}
            </div>

        </div>
    )
}

export default Jeremy