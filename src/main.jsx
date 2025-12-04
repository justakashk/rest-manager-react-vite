import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Nav from '../components/Nav.jsx'
import Mainc from '../components/Mainc.jsx'

// import MainContent from '../components/MainContent.jsx'

createRoot(document.getElementById('root')).render(

  <>
  <Nav/>
 <Mainc/>

  <Mainc/>
 </>

)
