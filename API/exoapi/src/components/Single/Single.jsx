import React from 'react'
import { Link, useParams } from 'react-router-dom'

function Single(props) {
    const params = useParams();
    let carte = props.data.find(item => item.id == params.id)
  return (
    <div>
        <Link to={"/"}> home </Link>
        <h1> {carte.title} </h1>
        <h3> {carte.body} </h3>
    </div>
  )
}

export default Single