import React from 'react';
import './Progressbar.css'

function Progressbar(props) {
    let style = 
        {
            width : `${props.test}%`,
            height : "2vh",
            background : "red"
        }

    return (
        <div className='content'>
            <div style={style} ></div>
        </div>
    )
}

export default Progressbar