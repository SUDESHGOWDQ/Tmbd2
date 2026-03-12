import React,{useState,useEffect} from 'react'
import {fetchMovieCast} from '../../api/index'
import './index.css'

const Index = ({id}) => {

	const[cast,setCast] = useState([])
	const imageBaseUrl = 'https://image.tmdb.org/t/p/w500'

	useEffect(()=>{
		fetchMovieCast(id)
		.then((d)=>setCast(d.cast))
	},[id])

  return (
	<div className='cast'>
	{
		cast.slice(0,6).map((item,index)=>{
			return(
				<img key={item.id} className='cast-image' src={`${imageBaseUrl}/${item.profile_path}`}/>
			)
		})
	}
	</div>
  )
}

export default Index