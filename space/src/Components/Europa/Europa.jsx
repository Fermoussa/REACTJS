import React from 'react'
import './Europa.css'
import { Link, NavLink } from 'react-router-dom'
import europa from '../../assets/img/destination/europa.png';

function Europa() {
    return (
        <div className='europa'>
            <div className='destination'>

                <h2 className='pick'> <span>01</span> PICK YOUR DESTINATION </h2>

                <div className="planete">

                    <div className="imageplanete"> <img src={europa} alt="" srcset="" /> </div>

                    <div className="detailplanete">

                        <div className="choixplanete">
                            <NavLink to={"/destination"}> Moon </NavLink>
                            <NavLink to={"/destination/mars"}> Mars </NavLink>
                            <NavLink to={"/destination/europa"}> Europa </NavLink>
                            <NavLink to={"/destination/titan"}> Titan </NavLink>
                        </div>

                        <span className='titreplanete'>  EUROPA </span>

                        <p className='descriptionPlanete'>
                        The smallest of the four Galilean moons orbiting Jupiter,
                        Europa is a winter lover's dream. With an icy surface, it's
                        perfect for a bit of ice skating, curling, hockey, or simple 
                        relaxation in your snug wintery cabin.
                        </p>

                        <hr className='lignehr' />

                        <div className="timedestination">
                            <span className='est'> EST. TRAVEL TIME </span>
                            <span className='days'> 3 YEARS </span>
                        </div>

                    </div>

                </div>


            </div>
        </div>
    )
}

export default Europa