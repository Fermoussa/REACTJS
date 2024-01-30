import React from 'react';
import './Crew.css';
import douglas from '../../assets/img/image-douglas-hurley.webp'
import { NavLink } from 'react-router-dom';

function Crew() {
    return (
        <div className='crew'>
            <h2 className='pick'> <span>02</span> MEET YOUR CREW </h2>
            <div className="detailcrew">
                <div className="gauchecrew">
                    <span className='post'> COMMANDER  </span>
                    <span className='crewname'> DOUGLAS HURLEY </span>
                    <p className='descriptioncrew'>
                        Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.
                    </p>
                    <div className="changecrew1">
                        <NavLink to={"/crew"}> p </NavLink>
                        <NavLink to={"/crew/mark"}> M </NavLink>
                        <NavLink to={"/crew"}> Z </NavLink>
                        <NavLink to={"/crew"}> Q </NavLink>
                    </div>
                </div>

                <div className="droitecrew">
                    <img src={douglas} className='people' alt="" srcset="" />
                </div>


            </div>
        </div>
    )
}

export default Crew