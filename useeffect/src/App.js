//! Exo1 ------------------------------------------------------------------------
// import { useEffect, useState } from 'react';
// import './App.css';

// function App() {
//   const[compteur, setCompteur] = useState(0);

//   useEffect(()=>{
//     console.log(`La valeur du compteur: ${compteur} `);
//   },[compteur])

//   return (
//     <div className="App">
//       <h1> compteur : {compteur} </h1>
//       <button onClick={()=> setCompteur(compteur-1)}>-1</button>
//       <button onClick={()=> setCompteur(compteur+1)}>+1</button>
//     </div>
//   );
// }

// export default App;

//! Exo2 ------------------------------------------------------------------------
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const[chrono, setChrono] = useState(0);
  const[minutes, setMinutes] = useState(0);
  const[verif, setVerif] = useState(0);

  function lancer(){
    setInterval(() => {
      // setChrono(chrono+1);
      setChrono((prevchrono) => prevchrono+1);
      setVerif((prevverif) => prevverif+1);
      // setTemps((temps) => temps + 1);
      // if(chrono == 60){
      //   console.log("minute");
      // }

    }, 200);

  }




  useEffect(()=>{
    console.log(`le chrono ${chrono}`);
    console.log(`le test ${verif}`);

    if (chrono == 60) {
      setChrono(0)
    }

    if(verif == 60){
      console.log("minute");
      setMinutes((prevminutes)=> prevminutes+1);
      setVerif(0);
    }

    return()=>{

    }
  },[chrono])

  return (
    <div className="App">
      <h1> Chrono:  <span className='time'> {minutes}: {chrono <10 ? "0" : null}{chrono} </span> </h1>
      <button onClick={()=> lancer()}> lancer </button>
    </div>
  );
}

// export default App;

//! Exo3 ------------------------------------------------------------------------

// import { useEffect, useState } from 'react';
// import './App.css';
// import Progressbar from './components/Progressbar/Progressbar';

// function App() {

//   const[test, setTest] = useState(0);

//   const[time, setTime] = useState(0);

//   // function lancer(){
//   //   setInterval(() => {
//   //     setTime((prevtime)=> prevtime+1);
//   //     setTest((prevtest) => prevtest+10);

//   //   }, 1000);
//   // }

//   useEffect(()=>{
//     let a = setInterval(() => {
//       setTime((prevtime)=> prevtime+1);
//       setTest((prevtest) => prevtest+10);

//     }, 1000);
//     // if(test > 100){

//     // }
//     console.log(`test = ${test}`);

//     return () =>{
//       clearInterval(a)
//     }
//   },[time])



//   return (
//     <div className="App">
//       <Progressbar test={test}/>
//       {/* <button onClick={()=>lancer()}> lancer</button> */}
//       <h2>{time}</h2>
//     </div>
//   );
// }

// export default App;



import { useEffect, useState } from 'react';
import './App.css';
import Progressbar from './components/Progressbar/Progressbar';
import Todolist from './components/Todolist/Todolist';

function App() {


  const taches = [
    {
      todo: "manger"
    },
    {
      todo: "lire"
    },
    {
      todo: "courir"
    }
  ]

  console.log(taches[0].todo);

  // const[afaire,]


  function affiche(e){
    if (e.key === 'Enter') {
      // console.log("hello");
      let phrase = e.target.value;
      console.log(phrase);
    }
  }

  return (
    <div className="App">

      <input type="text" onKeyDown={affiche}/>

      <div className="afaire">
        {
          taches.map((item, index) => (
            <Todolist key={index} tache={item.todo} />
          ))
        }

      </div>

    </div>
  );
}

export default App;
