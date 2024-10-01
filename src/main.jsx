import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

// Import das paginas
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Cadastro from './pages/Cadastro.jsx'
import Palpites from './pages/Palpites.jsx'
import Roleta from './pages/roleta.jsx'
import Fantasy from './pages/Fantasy.jsx'
import Aovivo from './pages/Aovivo.jsx'
import Circuitos from './pages/Circuitos.jsx'
import Sobre from './pages/Sobre.jsx'
import Afiliados from './pages/Afiliados.jsx'
import Premios from './pages/Premios.jsx'
import Suporte from './pages/Suporte.jsx'
import Blog from './pages/Blog.jsx'
import PageNotFound from './pages/PageNotFound.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {index: true, element: <Home/>},
      {path: '/login', element: <Login/>},
      {path: '/cadastro', element: <Cadastro/>},
      {path: '/palpites', element: <Palpites/>},
      {path: '/roleta', element: <Roleta/>},
      {path: '/fantasy', element: <Fantasy/>},
      {path: '/aovivo', element: <Aovivo/>},
      {path: '/circuitos', element: <Circuitos/>},
      {path: '/sobre', element: <Sobre/>},
      {path: '/afiliados', element: <Afiliados/>},
      {path: '/premios', element: <Premios/>},
      {path: '/suporte', element: <Suporte/>},
      {path: '/blog', element: <Blog/>},
      {path: '*', element: <PageNotFound/>}
    ]
  }
])

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
