import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { skills } from '../data/data'

const Skills = () => {
    const {theme}=useContext(ThemeContext)
  return (
    <section className={`${theme==='dark'?'text-white':'text-black'} m-10 max-w-4xl mx-auto px-6 py-12`}>
        <h2 className="text-3xl font-bold mb-6">Skills</h2>

        <ul className='grid grid-cols-1 md:grid-cols-3 m-10 p-10 gap-10'>
            {skills.map(skill=>(
                <div className='bg-blue-100 w-40 rounded text-black p-10 ring ring-cyan-400'>
                    <h3>{skill.title}</h3>
                    <ul>
                        
                    </ul>
                </div>
            ))}
        </ul>
    </section>
  )
}

export default Skills