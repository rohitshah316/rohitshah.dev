import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { GrProjects } from "react-icons/gr";
import { IoIosRocket } from "react-icons/io";
import { FaPhone } from "react-icons/fa";

import { ThemeContext } from '../../context/ThemeContext';

const BottomNavbar = () => {

  const {theme}=useContext(ThemeContext)
  return (
    
    <nav className='fixed left-1/2 -translate-x-1/2 bottom-4 bottom-navbar'>
        <ul className={`flex gap-6 rounded-4xl justify-center items-center m-5 text-2xl p-5 shadow-lg  ${theme==='dark'?'bg-gray-950 text-white shadow-cyan-400/50 ring ring-blue-500 ':'bg-gray-300 shadow-cyan-800/50 text-black'} `}>
                    <li><NavLink to='/'><FaHome /></NavLink></li>
                    <li><NavLink  to='/about'><IoMdPerson/></NavLink></li>
                    <li><NavLink to='/skills'><IoIosRocket /></NavLink></li>
                    <li><NavLink to='/projects'><GrProjects /></NavLink></li>
                    
                    <li><NavLink to='/contact'><FaPhone /></NavLink></li>
                </ul>
    </nav>
  )
}

export default BottomNavbar