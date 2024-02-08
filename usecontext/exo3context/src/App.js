import { createContext, useState } from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import Taches from './components/Taches/Taches';


export const Moncontext = createContext();

function App() {

  const[tache, setTache] = useState([
    {
      "nomtache": "manger",
      "etat": false,
    },
    {
      "nomtache": "lire",
      "etat": false,
    }
  ])

  function click(item){
    setTache([...tache], item.etat = !item.etat);
}

  return (
    <div className="App">
    <Moncontext.Provider value={[tache, setTache, click]}>
      <Taches/>
    </Moncontext.Provider>
    </div>
  );
}

export default App;
