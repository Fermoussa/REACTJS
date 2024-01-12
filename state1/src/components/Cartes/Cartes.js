import React, { useState } from 'react'
import Jeremy from '../Jeremy/Jeremy'
import './Cartes.css';
import point from '../../assets/icon-ellipsis.svg'


function Cartes(props) {

  // const [periode,setPeriode] = useState("daily");
  // const [curentPeriod, setCurentperiod] = useState('')

  // let periode = props.periode;
  // function testdaily(){
  //   setPeriode("daily")
  // }


  return (
      <div className="cartes">
        <span className='title'> <h4> {props.title} </h4> <img src={point} className='point' alt="" srcset="" /> </span>
        <span className='grandtxt'> {props.curr} hrs </span>
        <span className='woo'> Last week {props.prev}hrs </span>
      </div>
  )
}

export default Cartes