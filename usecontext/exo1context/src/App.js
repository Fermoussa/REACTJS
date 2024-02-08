import { createContext, useState } from 'react';
import './App.css';
import Acceuil from './components/Acceuil/Acceuil';

export const Moncontext = createContext();

function App() {

  const[username,setUserame] = useState("moussa");
  const[theme, setTheme] = useState("light");

  return (
    <div className="App">
      <Moncontext.Provider value={[username, theme]}>
        <Acceuil/>
      </Moncontext.Provider>
    </div>
  );
}

export default App;
