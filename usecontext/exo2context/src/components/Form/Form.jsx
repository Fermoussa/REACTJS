import React, { useContext } from 'react';
import './Form.css'
import { Link } from 'react-router-dom';
import { Moncontext } from '../../App';

function Form() {

    const[nom, mail, setName, setMail] = useContext(Moncontext);

    function lenom(e){
        setName(e.target.value)
    }

    function lemail(e){
        setMail(e.target.value)
    }

  return (
    <div className='form'>
        <Link to={"/"}> Acceuil </Link>
        <input type="text" placeholder='nom' onChange={lenom} />
        <input type="text" placeholder='adresse mail' onChange={lemail} />
    </div>
  )
}

export default Form