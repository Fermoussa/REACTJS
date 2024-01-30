import React from 'react';
import './Ansar.css';
import ansar from '../../assets/img/anousha.png'
import { NavLink } from 'react-router-dom';

function Ansar() {
    return (
        <div className='ansar'>
            <h2 className='pick'> <span>02</span> MEET YOUR CREW </h2>
            <div className="detailcrew">
                <div className="gauchecrew">
                    <span className='post'> FLIGHT ENGINEER  </span>
                    <span className='crewname'> ANOUSHEH ANSARI </span>
                    <p className='descriptioncrew'>
                        Anousheh Ansari is an Iranian American engineer and co-
                        founder of Prodea Systems. Ansari was the fourth self-
                        funded space tourist, the first self-funded woman to fly
                        to the ISS, and the first Iranian in space.
                    </p>
                    <div className="changecrew1">
                        <NavLink to={"/crew"}> <div className="boule"></div> </NavLink>
                        <NavLink to={"/crew/mark"}> <div className="boule"></div> </NavLink>
                        <NavLink to={"/crew/victor"}> <div className="boule"></div>  </NavLink>
                        <NavLink to={"/crew/ansar"}> <div className="boule"></div>  </NavLink>
                    </div>
                </div>

                <div className="droitecrew">
                    <img src={ansar} className='people' alt="" srcset="" />
                </div>


            </div>
        </div>
    )
}

export default Ansar