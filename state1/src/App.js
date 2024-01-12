import './App.css';
import Jeremy from './components/Jeremy/Jeremy';
import Cartes from './components/Cartes/Cartes';
import data from './data.json'
import { useState } from 'react';

function App() {
// const [periode,setPeriode] = useState(" ");
const [periode,setPeriode] = useState("monthly");
const [curentPeriod, setCurentperiod] = useState('')
console.log(`periode: ${periode}`);

function testdaily(){
  setPeriode('daily')
  console.log(periode);
}
function testmonth(){
  setPeriode('monthly')
  console.log(periode);
}

function testweek(){
  setPeriode('weekly')
  console.log(periode);
}

  return (
    <div className="App">
      
      <Jeremy periode={periode} setPeriode={setPeriode} daily={testdaily} monthly={testmonth} week={testweek}/>
      <div className="cardall">
        {
          data.map((item, index) => <Cartes key={index} curr={item.timeframes[periode].current} title={item.title} />)
        }
      </div>
    </div>
  );
}

export default App;
