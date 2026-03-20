import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import {fetchMovieCast} from '../../../api/index'
import './index.css'

const Index = ({id,imageBaseUrl}) => {

	const[cast,setCast] = useState([])
	const navigate = useNavigate();

	function handleClickImage(id){
		navigate(`/person/${id}`)
	}
	
	useEffect(()=>{
		fetchMovieCast(id)
		.then((d)=>setCast(d.cast))
	},[id])

  return (
	<div className='cast'>
	{
		cast.slice(0,6).map((item,index)=>{
			return(
				<img onClick={()=>handleClickImage(item.id)}  key={item.id} className='cast-image' src={`${imageBaseUrl}/${item.profile_path}`}/>
			)
		})
	}
	</div>
  )
}

export default Index