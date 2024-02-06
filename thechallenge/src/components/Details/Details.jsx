import React from 'react';
import './Details.css';
import { Link, useParams } from 'react-router-dom';

function Details(props) {

  const params = useParams();
  const pays = props.data.find(item => item.cca3 == params.id)

  const firstNativeName = Object.values(pays.name.nativeName)[0];
  const nativename = firstNativeName ? firstNativeName.common : null;

  const firstCurrencie = Object.values(pays.currencies)[0].name;
  const curencie = firstCurrencie ? firstCurrencie.name : null;


  const langues = Object.values(pays.languages);
  console.log(langues);
  const alllangue = langues.join(', ');

  return (
    <div className='contentDetail'>

      <div className="contentback">
        <Link to={"/"}> <button className='button-50'>Back</button> </Link>
      </div>

      <div className="detailpays">
        <img src={pays.flags.png} alt="" srcset="" />

        <div className="txtpays">
          <h3> {pays.name.common} </h3>
          <div className="alldetails">
            <div className='gauche'>
              <span>
                <span className='gras'>Native name: </span>{nativename}
              </span>
              <span>
                <span className='gras'>Population: </span>{pays.population}
              </span>
              <span>
                <span className='gras'>Région: </span>{pays.region}
              </span>
              <span>
                <span className='gras'>Sub Région: </span>{pays.subregion}
              </span>
              <span>
                <span className='gras'>Capital: </span>{pays.capital}
              </span>
            </div>
            <div className="droite">
              <span>
                <span className='gras'>Top level domain: </span>{pays.tld}
              </span>
              <span>
                <span className='gras'>Currencies: </span>{curencie}
              </span>
              <span>
                <span className='gras'>Languages: </span>{alllangue}
              </span>

              <span className='border'>
                <span className='gras2'> Borders: </span>
                {
                  <div className="l">
                    {
                      pays.borders?.map((item, index) => (
                        <div key={index} className='limitrof' > 
                        <Link to={`/${item}`}> <button> {props.data.find(elem => elem.cca3 === item).name.common} </button> </Link>
                        </div>
                      ))
                    }

                  </div>

                }
              </span>

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Details