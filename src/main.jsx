import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './components/home/Home.jsx'
import { About } from './components/about/About.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  //in react dom
  <RouterProvider router={router}/>
  
)
