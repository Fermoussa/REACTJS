import { Link, NavLink, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Single from './components/Single/Single';

const monrouteur = createBrowserRouter([
  {
    path: "/",
    element: <div> <Root /> </div>,
    children: [
      {
        path: "blog",
        element: <div> Blog  </div>
      },
      {
        path: "contact",
        element: <div> Contact </div>
      },
    ]
  }
])


function Root(){
  return <> 

    <header>
      <nav>
        <NavLink to="/blog"> Blog </NavLink>
        <NavLink to="/contact"> Contact </NavLink>
      </nav>
    </header>

    <div>
      <Outlet/>
    </div>

  </>
}

function App() {
  return (

      <RouterProvider  router={monrouteur}/>

  );
}

export default App;









// {
//   path: "/",
//   element: 
//   <div> 
//     Ma page d'acceuil 
//     <nav>
//       <NavLink to="/blog"> Blog </NavLink>
//       <NavLink to="/contact"> Contact </NavLink>
//     </nav>
//   </div>
// },

// {
//   path: "/blog",
//   element: 
//   <div> 
//     Ma page blog  
//     {/* <NavLink to="/blog"> Blog </NavLink>
//     <NavLink to="/"> Home </NavLink>
//     <NavLink to="/contact"> Contact </NavLink> */}
//   </div>
// },

// {
//   path: "/contact",
//   element: 
//   <div> 
//     Ma page contact 
//     {/* <NavLink to="/"> Home </NavLink>
//     <NavLink to="/blog"> Blog </NavLink> */}
//   </div>
// }