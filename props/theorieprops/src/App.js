import './App.css';
import Texte from './components/Texte/Texte';
import Button from './components/Button/Button';

function App() {

  function clique(){
    alert("clique!");
  }

  return (
    <div className="App">
      <h1> Comprendre les props </h1>
      <Button onClick = {clique}>
        Click me
      </Button>

      <Texte title="hello earth">
        <p>
          Moussa <b> feraouni </b>
        </p>
      </Texte>

      <Texte title="hello moon">
        <p>
          Youssef <b> feraouni </b>
        </p>
      </Texte>


    </div>
  );
}

export default App;
