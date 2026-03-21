import React, { useCallback, useContext } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import TopNavbar from './components/layout/TopNavbar'
import BottomNavbar from './components/layout/BottomNavbar'
import { ThemeContext } from './context/ThemeContext'
import About from './pages/About'
import Skills from './pages/Skills'
import Footer from './components/layout/Footer'
import Projects from './pages/Projects'

const App = () => {

  const {theme}=useContext(ThemeContext)
  return (
    <BrowserRouter>
 
    <div className={`flex flex-col min-h-screen ${theme}`}>
        
      <TopNavbar/>
  
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/projects' element={<Projects/>}/>
        
        <Route path='/contact' element={<Home/>}/>
        
      </Routes>

      <BottomNavbar/>
         <Footer/>
    </div>
    
    </BrowserRouter>
  )
}

export default App