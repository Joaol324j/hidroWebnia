import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import GlobalStyles from './components/GlobalStyles'
import Menu from './components/Menu'
import Measurements from './pages/Measurements'
import Admin from './pages/Admin'
import Messages from './pages/Messages'
import DetailsDevices from './components/DetailsDevices'

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Menu />
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/medidas' element = {<Measurements />} />
        <Route path='/medidas/:id' element = {<DetailsDevices />} />
        <Route path='/admin' element = {<Admin />} />
        <Route path='/mensagens' element = {<Messages />} />
      </Routes>
    </Router>
  )
}

export default App