import React, { useContext } from 'react';
import './Login.css';

import { Moncontext } from '../../App';

function Login() {

    const[name, setName, mail, setMail, setConnecter] = useContext(Moncontext);

  return (
    <div className='log'>
        <h2> Se connecter </h2>
        <input type="text" placeholder='prenom' onChange={(e)=>setName(e.target.value)} />
        <input type="text" placeholder='mail' onChange={(e)=>setMail(e.target.value)} />
        <input type="text" placeholder='adresse mail'  />
        <button> Log in </button>

        <div className='resume'>
            <span> username: {name}  </span>
            <span> mail: {mail} </span>
        </div>
    </div>
  )
}

export default Login