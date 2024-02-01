import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import All from './components/All/All';
import Single from './components/Single/Single';


function App() {

  const[data,setData] = useState([]);

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((reponse)=> setData(reponse.data))
    .catch((Error)=> console.log(Error))
  },[])


  const routeur = createBrowserRouter([
    {
      path: "/",
      element: data.map((item,index)=>(
        <All key={index} title={item.title} body={item.body} id={item.id} />
      ))
    },

    {
      path: "/:id",
      element: <Single data={data} />
    }
  ])


  return (
    <div className="App">
      <RouterProvider router={routeur} />
    </div>
  );
}

export default App;
