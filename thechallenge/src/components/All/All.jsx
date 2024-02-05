import React, { useState } from 'react'
import './All.css'
import { Link } from 'react-router-dom'

function All(props) {

    const[test, setTest] = useState(props.data);

    function ressearch(e){
        if(e.key === 'Enter'){
            console.log(e.target.value);
            setTest(props.data.filter(element => element.name.common.toLowerCase() === e.target.value.toLowerCase()))
            console.log(`test ${test}`);

            

        }

    }

    return (
        <div className='all'>
            <div className="contentsearch">
                <input type="search" placeholder='Search for a country...' onKeyDown={ressearch} />
                <span> filter by region </span>
            </div>

            <div className="contentpays">
                {
                    test.map((item, index) => (
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