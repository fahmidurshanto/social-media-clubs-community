import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router";
import ClubDetails from './assets/Pages/ClubDetails/ClubDetails.jsx';
import Home from './assets/Pages/Home/Home.jsx';
import AllClubs from './assets/Pages/AllClubs/AllClubs.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/clubDetails",
        element: <ClubDetails></ClubDetails>
      },
      {
        path: "/allClubs",
        element: <AllClubs></AllClubs>
      }
    ]
  },
  {
    path: "/clubDetails",
    element: <ClubDetails></ClubDetails>
  }
])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
  </RouterProvider>,
)
