import { NavLink, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Destination from './Components/Destination/Destination';
import etoile from './assets/img/apple-mask-icon.png';
import Mars from './Components/Mars/Mars';
import Europa from './Components/Europa/Europa';
import Titan from './Components/Titan/Titan';
import Crew from './Components/Crew/Crew';
import Mark from './Components/Mark/Mark';

function App() {

  const monrouteur = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "",
          element: <Home />
        },
        {
          path: "destination",
          element: <Destination />,
          // children: [
          //   {
          //     path: "/destination/mars",
          //     element: <Mars />
          //   }
          // ]
        },
        {
          path: "destination/mars",
          element: <Mars />
        },
        {
          path: "destination/europa",
          element: <Europa />
        },
        {
          path: "destination/titan",
          element: <Titan />
        },
        {
          path: "crew",
          element: <Crew />
        },
        {
          path: "crew/mark",
          element: <Mark />
        },

      ]
    }
  ])

  function Root() {
    return <>
      <div className="content">
        <header>
          <div className="etoile"> <img src={etoile} alt="" srcset="" /> </div>
          <div className="ligne"></div>
          <nav>
            <NavLink to={"/"}> 00 HOME </NavLink>
            <NavLink to={"/destination"}> 01 DESTINATION </NavLink>
            <NavLink to={"/crew"}> 02 CREW </NavLink>
            {/* <NavLink to={"/destination"}> 01 DESTINATION </NavLink> */}
          </nav>
        </header>

        <main>
          <Outlet />
        </main>
      </div>
    </>
  }

  return (
    <div className="App">
      <RouterProvider router={monrouteur} />
    </div>
  );
}

export default App;
