import React from 'react';
import './Destination.css';
import { Link, NavLink } from 'react-router-dom';
import lune from '../../assets/img/destination/moon.png'

{/* <Link to={"/destination/mars"}> MARS </Link> */}

function Destination() {
  return (
    <div className='destination'> 
    
      <h2 className='pick'> <span>01</span> PICK YOUR DESTINATION </h2>

      <div className="planete">

        <div className="imageplanete"> <img src={lune} alt="" srcset="" /> </div>

        <div className="detailplanete">

          <div className="choixplanete">
            <NavLink to={"/destination"}> Moon </NavLink>
            <NavLink to={"/destination/mars"}> Mars </NavLink>
            <NavLink to={"/destination/europa"}> Europa </NavLink>
            <NavLink to={"/destination/titan"}> Titan </NavLink>
          </div>

          <span className='titreplanete'>  MOON </span>

          <p className='descriptionPlanete'>
            See our planet as you've never seen it before. A perfect
            relaxing trip away to help regain perspective and come 
            back refreshed. While you're there, take in some history
            by visiting the Luna 2 et Apollo 11 landing sites.
          </p>

          <hr className='lignehr' />

          <div className="timedestination">
              <span className='est'> EST. TRAVEL TIME </span>
              <span className='days'> 3 DAYS </span>
          </div>

        </div>

      </div>

      
    </div>
  )
}

export default Destination