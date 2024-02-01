import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Products from './components/Products/Products';
import axios from 'axios';
import { useEffect, useState } from 'react';


function App() {

  const[data,setData] = useState([]);

  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products/")
    .then((reponse)=> setData(reponse.data))
    .catch((error)=> console.log(error))
  })

  const monrouteur = createBrowserRouter([
    {
      path: "/",
      element: <Products data={data} />
    },
    {
      path: "/test",
      element: <div> test </div>
    }
  ])
  

  return (
    <div className="App">
      <RouterProvider router={monrouteur} />
    </div>
  );
}

export default App;
