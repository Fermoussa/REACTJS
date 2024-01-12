import React from 'react';
import './Progress.css';

function Progress(props) {
    return (
        <div className='jauge'>
            {props.children}
        </div>
    )
}

export default Progress