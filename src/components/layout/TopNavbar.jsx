import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ThemeContext } from '../../context/ThemeContext'
import { IoSunnyOutline } from "react-icons/io5";
import { IoIosMoon } from "react-icons/io";
import AnimatedContent from '../common/reactbits/AnimatedContent';


const Navbar = () => {

  const {toggleTheme,theme}=useContext(ThemeContext)
  return (


<AnimatedContent
  distance={100}
  direction="vertical"
  reverse={true}
  duration={0.2}
  ease="power3.out"
  initialOpacity={0}
  animateOpacity
  scale={1}
  threshold={0.1}
  delay={0}
>
  <nav className={`flex justify-between items-center p-5  top-navbar ${theme==='dark'?'text-white':'text-black'} shadow-md`}>
        <h1 className='font-bold text-3xl text-gradient'>rohitshah.dev</h1>


        {/* desktop menu */}
        <div className='flex gap-3 item-center'>
        <ul className='md:flex gap-2 hidden'>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/skills'>Skills</NavLink></li>
            <li><NavLink to='/projects'>Projects</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
        
             
        </ul>
<button onClick={toggleTheme} className='text-2xl rounded-4xl p-1 theme-button'> {theme==='dark'?<IoIosMoon/>:<IoSunnyOutline/>}</button>
        </div>

       
    </nav>
</AnimatedContent>
    
  )
}

export default Navbar