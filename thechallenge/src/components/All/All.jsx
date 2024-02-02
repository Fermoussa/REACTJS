import React from 'react'
import './All.css'
import { Link } from 'react-router-dom'

function All(props) {

    return (
        <div className='all'>
            <div className="contentsearch">
                <input type="search" placeholder='Search for a country...' />
                <span> filter by region </span>
            </div>

            <div className="contentpays">
                {
                    props.data.map((item, index) => (
                        <div className="carte" key={index}>
                            <Link to={`/${item.name.common}`}>
                                <img src={`${item.flags.png}`} alt="" />
                            </Link>
                            <div className="textpays">
                                <span className='nompays'> {item.name.common} </span>
                                <div className="details">
                                    <span className='pop1'><span className="gras">Population:</span> {item.population} </span>
                                    <span> <span className="gras">Region:</span> {item.region} </span>
                                    <span> <span className="gras">Capital:</span> {item.capital} </span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default All