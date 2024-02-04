import React from 'react';
import './Details.css';
import { Link, useParams } from 'react-router-dom';

function Details(props) {

  const params = useParams();
  const pays = props.data.find(item => item.name.common == params.id)

  const firstNativeName = Object.values(pays.name.nativeName)[0];
  const nativename = firstNativeName ? firstNativeName.common : null;

  return (
    <div className='contentDetail'>

      <div className="contentback">
        <Link to={"/"}> <button>Back</button> </Link>
      </div>

      <div className="detailpays">
        <img src={pays.flags.png} alt="" srcset="" />

        <div className="txtpays">
          <h3> {pays.name.common} </h3>
          <div className="alldetails">
            <div className='gauche'>
              <span>
                <span className='gras'>Native name: {nativename} </span>
              </span>
              <span>
                <span className='gras'>Population: {pays.population}</span>
              </span>
              <span>
                <span className='gras'>Région: {pays.region}</span>
              </span>
              <span>
                <span className='gras'>Sub Région: {pays.subregion}</span>
              </span>
            </div>
            <div className="gauche">
              gauche
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Details