import { useState } from 'react';
import './App.css';
import Scoreboard from './components/Scoreboard/Scoreboard';
import Choixjoueur from './components/Choixjoueur/Choixjoueur';
import Resultat from './components/Resultat/Resultat';

function App() {

  const [score, setScore] = useState(0);
  const [monchoix, setMonchoix] = useState("");
  const [choixia, setChoixia] = useState("");
  const [message, setMessage] = useState("");
  const [verif, setVerif] = useState(true);


  console.log(`mon choix: ${monchoix}`);
  console.log(`choix ia: ${choixia}`);
  // ! FONCTION JEU -----------------------------------
  function jeu(e) {
    let a = e.target.innerText;
    setMonchoix(a);

    const ia = ["f", "c", "p"];
    let aleatoire = Math.floor(Math.random() * ia.length);
    setChoixia(ia[aleatoire]);

    // console.log(`mon choix: ${monchoix}`);
    // console.log(`choix ia: ${choixia}`);

    if (monchoix === "f" && choixia === "f") {
      setMessage("Égalité!");
    } else if (monchoix === "f" && choixia === "c") {
      setMessage("Perdu!");
      setScore(score - 1);
      if (score === 0) {
        setScore(0);
      }
    } else if (monchoix === "f" && choixia === "p") {
      setMessage("Gagné!");
      setScore(score + 1);
    }

    else if (monchoix === "c" && choixia === "f") {
      setMessage("Gagné!");
      setScore(score + 1);
    } else if (monchoix === "c" && choixia === "c") {
      setMessage("Égalité!");
    } else if (monchoix === "c" && choixia === "p") {
      setMessage("Perdu!");
      setScore(score - 1);
      if (score === 0) {
        setScore(0);
      }
    }

    else if (monchoix === "p" && choixia === "f") {
      setMessage("Perdu!");
      setScore(score - 1);
      if (score === 0) {
        setScore(0);
      }
    } else if (monchoix === "p" && choixia === "c") {
      setMessage("Gagné!");
      setScore(score + 1);
    } else if (monchoix === "p" && choixia === "p") {
      setMessage("Égalité!");
    }
  }

  //! FIN FONCTION JEU -------------------------------------


  // let page = monchoix != " " && choixia != " " ? <Resultat monchoix= {monchoix}/> : console.log("h");
  function recommencer(){
    setTimeout(() => {
      setVerif(true);
      console.log("recommencer");
    }, 2500);
  }

  // let test = setTimeout(() => {
  //   setVerif(false);
  // }, 2500);



  let page = verif === true ? <Choixjoueur monchoix={jeu} message={message} verif={verif} setVerif={setVerif} /> : <Resultat monchoix={monchoix} choixia={choixia} verif={verif} setVerif={setVerif} recommencer={recommencer} />;
  setTimeout(() => {
    setVerif(false);
  }, 2000);

 

  return (


    <div className="App">
      <Scoreboard score={score} setScore={setScore} />
      {page}
      {/* <Choixjoueur monchoix={jeu} message={message} />  */}
      {/* {page} */}
    </div>
  );
}

export default App;
