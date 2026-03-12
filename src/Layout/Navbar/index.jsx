import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../../Components/Input'
import './index.css'

const index = ({search,setSearch}) => {
  return (
	<div className='Navbar'>
	<div className='nav-left'>Aaha</div>
	<div className='nav-right'>
	  <ul className='nav-list'>
	   <li><Input value={search} onchange={(e)=>setSearch(e.target.value)} placeholder="Search Movies"/></li>
	   <Link style={{color:'white',textDecoration:'none'}} to={'/'}><li>Home</li></Link>
	   <Link style={{color:'white',textDecoration:'none'}} to={'/about'}><li>About</li></Link>
	   <Link style={{color:'white',textDecoration:'none'}} to={'/contact'}><li>Contact</li></Link>
	  </ul>
	</div>
	</div>
  )
}

export default index