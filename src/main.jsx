import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Hero from './components/Hero/Hero';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    loader: ()=>fetch("/donation.json"),
    children:[
      {
        path:'/',
        element: <Hero></Hero>
      },
      {
        // path: '/',

      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
