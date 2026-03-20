import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ThemeContext } from '../../context/ThemeContext'
import { IoSunnyOutline } from "react-icons/io5";
import { IoIosMoon } from "react-icons/io";


const Navbar = () => {

  const {toggleTheme,theme}=useContext(ThemeContext)
  return (

    <nav className={`flex justify-between items-center p-5  top-navbar ${theme==='dark'?'text-white':'text-black'} shadow-md`}>
        <h1 className='font-bold text-3xl text-gradient'>rohitshah.dev</h1>


        {/* desktop menu */}
        <div className='flex gap-3 item-center'>
        <ul className='md:flex gap-2 hidden'>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/projects'>Projects</NavLink></li>
            <li><NavLink to='/skills'>Skills</NavLink></li>
             
        </ul>
<button onClick={toggleTheme} className='text-2xl rounded-4xl p-1 theme-button'> {theme==='dark'?<IoIosMoon/>:<IoSunnyOutline/>}</button>
        </div>

       
    </nav>
  )
}

export default Navbar