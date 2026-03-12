import React,{useContext} from 'react'
import {Button} from '../Button/index'
import { MovieContext } from "../../context/MovieContext";
import './index.css'

const Index = () => {
	const {currentPage, totalPages, handlePrev, handleNext} = useContext(MovieContext)
  return (
	<div className='pagination'>
	<Button onClick={handlePrev} text="Prev"/>
	<span>{currentPage}/{totalPages}</span>
	<Button onClick={handleNext} text="Next"/>
	</div>
  )
}

export default Index