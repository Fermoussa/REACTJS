import { NavLink, Outlet, RouterProvider, createBrowserRouter, useRouteError } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Error from './components/Error/Error';

function App() {

  const monrouteur = createBrowserRouter([
    {
      path: "/",
      element: <div> <Root /> </div>,
      children: [
        {
          path: "",
          element: <Home />
        },
        {
          path: "about",
          element: <About /> 
        },

        {
          path: "contact",
          element: <Contact />
        },

        {
          path: "*",
          element: <Error />
        }

      ]
    }
  ])

  function Root(){
    return <>
      <header>
        <nav>
          <NavLink to="/"> Home </NavLink>
          <NavLink to="/about"> About </NavLink>
          <NavLink to="/contact"> Contact </NavLink>
        </nav>
      </header>

      <main className='main'>
        <Outlet />
      </main>
    </>
  }

  return (
    <div className="App">
      <RouterProvider router={monrouteur}  />
    </div>
  );
}

export default App;
