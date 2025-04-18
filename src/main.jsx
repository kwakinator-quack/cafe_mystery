import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'

import App from './App'
import './index.css'

import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import MenuPage from './components/MenuPage'
import ContactPage from './components/ContactPage'


const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "menu", Component: MenuPage },
      { path: "contact", Component: ContactPage },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
