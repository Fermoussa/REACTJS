import React from 'react';
import './Todolist.css'



function Todolist(props) {


    return (
        <div className='t'>
            <div> {props.tache} </div>
        </div>
    )
}

export default Todolist