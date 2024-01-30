import React from 'react';
import './Victor.css';
import victor from '../../assets/img/victor.png'
import { NavLink } from 'react-router-dom';

function Victor() {
    return (
        <div className='crew'>
            <h2 className='pick'> <span>02</span> MEET YOUR CREW </h2>
            <div className="detailcrew">
                <div className="gauchecrew">
                    <span className='post'> PILOT  </span>
                    <span className='crewname'> VICTOR GLOVER </span>
                    <p className='descriptioncrew'>
                    Pilot on the first operational flight of the SpaceX Crew
                    Dragon to the International Space Station. Glover is a 
                    commander in the U.S. Navy where he pilots an F/A-18.He 
                    was a crew member of Expedition 64, and served as a 
                    station systems flight engineer.
                    </p>
                    <div className="changecrew3">
                        <NavLink to={"/crew"}> <div className="boule"></div> </NavLink>
                        <NavLink to={"/crew/mark"}> <div className="boule"></div> </NavLink>
                        <NavLink to={"/crew/victor"}> <div className="boule"></div>  </NavLink>
                        <NavLink to={"/crew/ansar"}> <div className="boule"></div>  </NavLink>
                    </div>
                </div>

                <div className="droitecrew">
                    <img src={victor} className='people' alt="" srcset="" />
                </div>


            </div>
        </div>
    )
}

export default Victor