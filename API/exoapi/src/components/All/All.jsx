import React from 'react'
import { Link } from 'react-router-dom'

function All(props) {
  return (
    <div className='carte'>
        <Link to={`/${props.id}`}> {props.title} </Link>
        <h3> {props.body} </h3>
    </div>
  )
}

export default All