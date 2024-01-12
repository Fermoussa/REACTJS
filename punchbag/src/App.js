import './App.css';
import Sac from './components/Sac/Sac';
import Progress from './components/Progress/Progress';
import Bouton from './components/Bouton/Bouton';
import { useState } from 'react';
import SacCasse from './components/SacCasse/SacCasse';

function App() {
  const [vie, setVie] = useState(100);

  let fin = "non";

  function degat(){
    setVie(vie -10);

    if(vie == 0){
      fin = "oui";
      console.log("fini");
      console.log(`la fin = ${fin}`);
    }
    fin = "oui";
  }

  function restart(){
    setVie(100);
  }

  let leSac = fin === "oui" ? <SacCasse/> : <Sac/>
  console.log(fin);

  return (
    <div className="App">

      {/* <Sac/> */}
      {leSac}
      

      <Progress>
        <p> hp : {vie} </p>
      </Progress>

      <button onClick={degat} className='degat'> punch </button>
      <button onClick={restart}> restart  </button>


    </div>
  );
}

export default App;
