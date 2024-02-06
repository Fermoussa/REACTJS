import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import All from './components/All/All';
import Details from './components/Details/Details';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [data, setData] = useState([]);
  const [verif, setVerif] = useState(true);


  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
      .then((reponse) => setData(reponse.data))
      .catch((error) => console.log(error))
  }, [])

  const monrouteur = createBrowserRouter([
    {
      path: "/",
      element: <Root />,

      children: [
        {
          path: "",
          element: <All data={data} />
        },
        {
          path: "/:id",
          element: <Details data={data} />
        }
      ]
    }
  ])

  

  function Root() {
    return <>
      <header>
        <nav>
          <h3>  Where in the world </h3>
          <button className='dark' onClick={() => setVerif(!verif)}> Dark Mode </button>
        </nav>
      </header>

      <main className="main">
        <Outlet />
      </main>


    </>
  }

  return (
    <div className={`App ${verif ? null : "darkMode"}`}>
      <RouterProvider router={monrouteur} />
    </div>
  );
}

export default App;
