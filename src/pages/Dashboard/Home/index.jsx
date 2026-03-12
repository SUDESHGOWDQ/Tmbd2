import React from 'react'
import { Link } from 'react-router-dom'
import {Card,CardTitle,CardImage,CardRating,CardDate} from '../../../Components/Card'
import './index.css'

const index = ({movie}) => {

	const image_Url = "https://image.tmdb.org/t/p/original"
	

  return (
	<div className='Home'>
	{
		movie.map((item,index)=>{
			return(
				<Card key={item.id}>
				<Link to={`/movie/${item.id}`}><CardImage  src={`${image_Url}/${item.poster_path}`}/></Link>
				<CardTitle title={item.title}/>
				<CardDate date={item.release_date}/>
				<CardRating rating={item.vote_average}/>
				</Card>
			)
		})
	}
	</div>
  )
}

export default index