import './App.css';
import Sac from './components/Sac/Sac';
import Punch from './components/Punch/Punch';
import Progress from './components/Progress/Progress';
import { useState } from 'react';
import SacCasse from './components/SacCasse/SacCasse';
import Restart from './components/Restart/Restart';

function App() {
  const [hp, setHp] = useState(100);

  let fini = "non"
  if(hp == 0){
    fini = "oui";
  }
  console.log(fini);

  let affichage = fini === "oui" ? <SacCasse/> : <Sac/>

  return (
    <div className="App">
      {affichage}
      <Progress vie = {hp}/>
      <Punch set = {setHp} life = {hp}/>
      <Restart set = {setHp} life = {hp}/>
    </div>
  );
}

export default App;
