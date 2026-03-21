import React from 'react'

const Button = ({text,className=""}) => {
  return (
    <button className={`flex items-center px-3 py-2 rounded-3xl cursor-pointer ${className}`}>{text}</button>
  )
}

export default Button