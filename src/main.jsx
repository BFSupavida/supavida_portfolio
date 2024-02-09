import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './components/home/Home.jsx'
import { About } from './components/about/About.jsx'
import { Project } from './components/project/Project.jsx'
import { Contact } from './components/contact/Contact.jsx'
import { Skills } from './components/skills/Skills.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/project',
    element: <Project />
  },
  {
    path: '/skills',
    element: <Skills />
  },
  {
    path: '/contact',
    element: <Contact />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  //in react dom
  <RouterProvider router={router}/>
  
)
