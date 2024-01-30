import React from 'react';
import './Mark.css';
import mark from '../../assets/img/mark.png'
import { NavLink } from 'react-router-dom';

function Mark() {
    return (
        <div className='crew'>
            <h2 className='pick'> <span>02</span> MEET YOUR CREW </h2>
            <div className="detailcrew">
                <div className="gauchecrew">
                    <span className='post'> MISSION SPECIALIST  </span>
                    <span className='crewname'> MARK <br /> SHUTTLEWORTH </span>
                    <p className='descriptioncrew'>
                    Mark Richard Shuttleworth is the founder and CEO of 
                    Canonical, the company behind the Linux-based Ubuntu 
                    operating system. Shuttleworth became the first South
                    African to travel to space as a space tourist.
                    </p>
                    <div className="changecrew2">
                        <NavLink to={"/crew"}> p </NavLink>
                        <NavLink to={"/crew"}> p </NavLink>
                        <NavLink to={"/crew"}> p </NavLink>
                        <NavLink to={"/crew"}> p </NavLink>
                    </div>
                </div>

                <div className="droitecrew">
                    <img src={mark} className='people' alt="" srcset="" />
                </div>


            </div>
        </div>
    )
}

export default Mark