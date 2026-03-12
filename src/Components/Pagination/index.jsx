import React from 'react'
import {Button} from '../Button/index'
import './index.css'

const index = ({currentPage,handleNext,handlePrev,totalPages}) => {
  return (
	<div className='pagination'>
	<Button onClick={handlePrev} text="Prev"/>
	<span>{currentPage}/{totalPages}</span>
	<Button onClick={handleNext} text="Next"/>
	</div>
  )
}

export default index