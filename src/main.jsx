import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Hero from './components/Hero/Hero';
import Donations from './components/Donations/Donations';
import Donation from './components/Donation/Donation';
import DonantionsContainer from './components/DonationsContainer/DonantionsContainer';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        loader: ()=>fetch("/donation.json"),
        element: <DonantionsContainer></DonantionsContainer>,
        
      },
      {
        path: '/donantions',
        element: <Donations></Donations>
      },
      {
        path: '/donation/:id',
        loader: ()=>fetch("/donation.json"),
        element: <Donation></Donation>
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
