import React, { useContext } from 'react'
import { FaReact } from "react-icons/fa";
import { ThemeContext } from '../context/ThemeContext';
import Button from '../components/common/Button';
import { TbFileCv } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md"
const Home = () => {

  const {theme}=useContext(ThemeContext)
  return (
    <section className={`flex md:flex-row flex-col justify-around items-center w-full my-15 ${theme==='dark'?'text-white':'text-black'}`}>
      <div className='flex gap-3 items-center'>
        <div>

        <h2 className='font-bold text-4xl'>I'm Rohit Shah</h2>
        <p className='font-bold text-3xl text-gradient '>REACT DEVELOPER</p>

      <div className='flex gap-2'>

        <Button text={<>Resume <TbFileCv className='text-2xl'/></>} className='mt-2 bg-red-500 hover:bg-red-600 text-white' target="_blank" onclick=""/>
        <Button text='Hire Me!' className='mt-2 bg-blue-500 hover:bg-blue-600 text-white' target="_blank" onclick=""/>
      </div>
      <div className='text-4xl flex gap-2 mt-3 ml-10'>
              <a href="https://github.com/rohitshah316" target='_blank' className='hover:text-gray-400'><FaGithub/></a>
              <a href="https://linkedin.com/in/rohitshah316" target='_blank' className='hover:text-gray-400'><FaLinkedin/></a>
              <a href="mailto:contact.rohitshah.dev@gmail.com" target='_blank' className='hover:text-gray-400'><MdEmail/></a>
            </div>
        </div>

<FaReact className='text-8xl text-cyan-400 animate-spin' style={{animationDuration:'5s'}}/>
      </div>


      <div className='w-80 mt-10 flex flex-col items-center'>
        <img src="https://avatars.githubusercontent.com/u/213147181?v=4" alt="" className='rounded-[50%] ring ring-cyan-600 shadow-lg shadow-cyan-800'/>
        <h2 className='text-gradient font-bold text-4xl py-5'>Rohit Shah</h2>
      </div>
    </section>
  )
}

export default Home