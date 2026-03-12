import React,{useState,useEffect} from 'react'
import {fetchTrendingMovies} from '../../api/index'
import { Link } from 'react-router-dom'
import {Card,CardTitle,CardImage,CardRating,CardDate} from '../../Components/Card/index'
import './index.css'

const index = () => {

	const[movie,setMovie] = useState([])

	useEffect(()=>{
		fetchTrendingMovies()
		.then((d)=>{
			setMovie(d.results)
		})
	},[])

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