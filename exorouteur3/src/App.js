import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import All from './components/All/All';
import Single from './components/Single/Single';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  // const routeur = createBrowserRouter([
    
  //     {
  //       path: "/",
  //       element: <div> <All /> </div>,
  //     },

  //     {
  //       path: "/s/id:",
  //       element: <div> <Single /> </div>,
  //     }
      
  // ])

  // function Root(){
  //   return <>
  //   <main>
  //     {/* <All /> */}
  //     <Outlet />
  //   </main>
  //   </>

  // }

  return (
    <div className="App">
      {/* <RouterProvider router={routeur} /> */}
      <Single />
    </div>
  );
}

export default App;
