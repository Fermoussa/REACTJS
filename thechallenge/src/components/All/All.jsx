import React, { useState } from 'react'
import './All.css'
import { Link } from 'react-router-dom'

function All(props) {

    const [test, setTest] = useState(props.data);

    function ressearch(e) {
        // if(e.key === 'Enter'){
        //     console.log(e.target.value);
        //     setTest(props.data.filter(element => element.name.common.toLowerCase() === e.target.value.toLowerCase()))
        //     console.log(`test ${test}`);
        // }

        const searchTerm = e.target.value.toLowerCase();

        setTest(props.data.filter(element => element.name.common.toLowerCase().startsWith(searchTerm)));


    }

    function continent(e){
        console.log(e.target.value);
        setTest(props.data.filter(element => element.region === e.target.value));

        if(e.target.value == "all"){
            setTest(props.data)
        }
    }



    return (
        <div className='all'>
            <div className="contentsearch">
                <input type="search" placeholder='Search for a country...' onChange={ressearch} />
                <select name="pets" id="continent-select" onChange={continent}>
                    <option value="">Filter by region</option>
                    <option value="all">All</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                    <option value="Antarctic">Antartic</option>

                </select>
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