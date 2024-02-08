import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import { createContext, useContext, useState } from 'react';

const Moncontext = createContext();

function App() {
  const[name, setName] = useState("")
  const[mail, setMail] = useState("")
  const[connecter, setConnecter] = useState(false);

  return (
    <div className="App">
      <Moncontext.Provider value={[name, setName, mail, setMail, setConnecter]} >
        <Login />
      </Moncontext.Provider>
    </div>
  );
}

export default App;
