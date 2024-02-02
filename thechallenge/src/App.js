import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import All from './components/All/All';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const[data,setData] = useState([]);

  useEffect(()=>{
    axios.get("https://restcountries.com/v3.1/all")
    .then((reponse)=> setData(reponse.data))
    .catch((error)=> console.log(error))
  },[])

  const monrouteur= createBrowserRouter([
    {
      path: "/",
      element: <Root/>,

      children: [
        {
          path: "",
          element: <All data={data}/>
        },
        {
          path: "/:id",
          element: <div> single </div>
        }
      ]
    }
  ])

  function Root(){
    return <>
      <header>
        <nav>
          <h3>  Where in the world </h3>
          <button> Dark Mode </button>
        </nav>
      </header>

      <main className="main">
        <Outlet/>
      </main>

    
    </>
  }

  return (
    <div className="App">
      <RouterProvider router={monrouteur} />
    </div>
  );
}

export default App;
