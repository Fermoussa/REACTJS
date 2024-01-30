import React from 'react'
import './Titan.css'
import { Link, NavLink } from 'react-router-dom'
import titan from '../../assets/img/destination/titan.png';


function Titan() {
    return (
        <div className='titan'>
            <div className='destination'>

                <h2 className='pick'> <span>01</span> PICK YOUR DESTINATION </h2>

                <div className="planete">

                    <div className="imageplanete"> <img src={titan} alt="" srcset="" /> </div>

                    <div className="detailplanete">

                        <div className="choixplanete">
                            <NavLink to={"/destination"}> Moon </NavLink>
                            <NavLink to={"/destination/mars"}> Mars </NavLink>
                            <NavLink to={"/destination/europa"}> Europa </NavLink>
                            <NavLink to={"/destination/titan"}> Titan </NavLink>
                        </div>

                        <span className='titreplanete'>  TITAN </span>

                        <p className='descriptionPlanete'>
                        The only moon known to have a dense atmosphere other 
                        than Earth, Titan is a home away from home (just a few 
                        hundred degrees colder!). As a bonus, you get striking 
                        views of the Rings of Saturn.
                        </p>

                        <hr className='lignehr' />

                        <div className="timedestination">
                            <span className='est'> EST. TRAVEL TIME </span>
                            <span className='days'> 7 YEARS </span>
                        </div>

                    </div>

                </div>


            </div>
        </div>
    )
}

export default Titan