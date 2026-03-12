import React from 'react'
import './index.css'

const Input = ({type,placeholder,onchange,value}) => {
  return (
	<input
	 type={type} value={value}
	  placeholder={placeholder} onChange={onchange}  className="movie-input"/>
  )
}

export default Input