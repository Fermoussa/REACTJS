import './App.css';
import { useEffect, useState } from 'react';
import Newtache from './components/Newtache/Newtache';
import Liste from './components/Liste/Liste';
import Searchbar from './components/Searchbar/Searchbar';

function App() {

  const [afaire, setAfaire] = useState([]);

  function valeur(e) {
    if (e.key === 'Enter') {
      let a = e.target.value;
      console.log(e.target.value);
      e.target.value = "";
      setAfaire((afaire) => [...afaire, a])
      // console.log(afaire);
    }



  }
  function test() {
    // console.log(props.afaire[0]);
    setAfaire((afaire) => [...afaire, "mousssa"] )
    console.log("hi");
  }

  useEffect(() => {
    console.log(afaire);
  })



  return (
    <div className="App">
      <Searchbar />
      <Newtache afaire={afaire} setAfaire={setAfaire} valeur={valeur} />
      <Liste afaire={afaire} setAfaire={setAfaire} supprimer={test} />
    </div>
  );
}

export default App;
