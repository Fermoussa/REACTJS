import './App.css';
import data from './data.json';
import Produit from './components/Produit/Produit';
import Argent from './components/Argent/Argent';
import { useState } from 'react';
import Monpanier from './components/Monpanier/Monpanier';

function App() {

  const[argent, setArgent] = useState(30);
  const[panier, setPanier] = useState([]);
  // const[qcola, setQcola] = useState(0);
  // const[qfanta, setFanta] = useState(0);
  // const[qice, setIce] = useState(0);
  // const [stockage, setStockage] = useState(0);
  

  return (
    <div className="App">

      <Argent argent={argent} setArgent={setArgent} />

      <div className="all">
      {
        data.map((item, index)=>(
          <Produit key={index} titre={item.nom} prit={item.prit} prix={item.prix} image={item.image}
          stock={item.stock}  argent={argent} setArgent={setArgent} panier={panier}
          setPanier={setPanier} />
        ))
      }
      </div>

      <Monpanier panier={panier} setPanier={setPanier} />
    </div>
  );
}

export default App;
