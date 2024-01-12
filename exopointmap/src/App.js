import './App.css';
import data from './donnee.json'
import Carte from './components/Carte/Carte';

function App() {
  return (
    <div className="App">
      {
        data.map((item,index)=> <Carte key={index} data={item} /> )
      }
    </div>
  );
}

export default App;
