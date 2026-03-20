import React, { useCallback, useContext } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import TopNavbar from './components/layout/TopNavbar'
import BottomNavbar from './components/layout/BottomNavbar'
import { ThemeContext } from './context/ThemeContext'

const App = () => {

  const {theme}=useContext(ThemeContext)
  return (
    <BrowserRouter>
    <div className={`flex flex-col min-h-screen ${theme}`}>
      <TopNavbar/>
  
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>

      <BottomNavbar/>
    </div>
    </BrowserRouter>
  )
}

export default App