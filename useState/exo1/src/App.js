import './App.css';
import { useState } from 'react';

function App() {
  const [compteur, setCompteur] = useState(0);

  function plus(){
    setCompteur(compteur + 1)
  }

  return (
    <div className="App">
      
      <p> Compteur : {compteur} </p>
      <button onClick={plus}> Clique </button>
    </div>
  );
}

