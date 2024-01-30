import React from 'react'
import './Mars.css'
import { Link, NavLink } from 'react-router-dom'
import mars from '../../assets/img/destination/mars.png';

function Mars() {
  return (
    <div className='mars'>
      <div className='destination'>

        <h2 className='pick'> <span>01</span> PICK YOUR DESTINATION </h2>

        <div className="planete">

          <div className="imageplanete"> <img src={mars} alt="" srcset="" /> </div>

          <div className="detailplanete">

            <div className="choixplanete">
              <NavLink to={"/destination"}> Moon </NavLink>
              <NavLink to={"/destination/mars"}> Mars </NavLink>
              <NavLink to={"/destination/europa"}> Europa </NavLink>
              <NavLink to={"/destination/titan"}> Titan </NavLink>
            </div>

            <span className='titreplanete'>  MARS </span>

            <p className='descriptionPlanete'>
            Don't forget to pack your hiking boots. You'll need them to 
            tackle Olympus Mons, the tallest planetary mountain in 
            our solar system. It's two and a half times the size of
            Everest!
            </p>

            <hr className='lignehr' />

            <div className="timedestination">
              <span className='est'> EST. TRAVEL TIME </span>
              <span className='days'> 9 MONTHS </span>
            </div>

          </div>

        </div>


      </div>
    </div>
  )
}

export default Mars