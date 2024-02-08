import './App.css';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Acceuil from './components/Acceuil/Acceuil';
import Form from './components/Form/Form';
import { createContext, useState } from 'react';


export const Moncontext = createContext();

function App() {

  const[nom, setName] = useState("");
  const[mail, setMail] = useState("");
  
  const monrouteur = createBrowserRouter([
    {
      path: "/",
      element: <Acceuil/>
    },
    {
      path: "form",
      element: <Form/>
    }
  ])

  return (
    <div className="App">
      <Moncontext.Provider value={[nom, mail, setName, setMail]}>
        <RouterProvider router={monrouteur}/>
      </Moncontext.Provider>

    </div>
  );
}

export default App;
