import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Donation from './components/Donation/Donation';
import DonantionsContainer from './components/DonationsContainer/DonantionsContainer';
import Donations from './Pages/Donations/Donations';
import Stats from './Pages/Stats/Stats';
import Error from './Pages/Error/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children:[
      {
        path:'/',
        loader: ()=>fetch("/donation.json"),
        element: <DonantionsContainer></DonantionsContainer>,
        
      },
      {
        path: '/donantions',
        element: <Donations> </Donations>
      },
      {
        path: '/donation/:id',
        loader: ()=>fetch("/donation.json"),
        element: <Donation></Donation>
      },
      {
        path: "/stats",
        loader: ()=>fetch('/donation.json'),
        element: <Stats></Stats>
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
