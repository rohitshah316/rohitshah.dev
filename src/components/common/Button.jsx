import React from 'react'

const Button = ({text,className="",href,download,target}) => {
  return (
    <a className={`flex items-center px-3 py-2 rounded-3xl cursor-pointer ${className}`} href={href} download={download} target={target}>{text}</a>
  )
}

export default Button