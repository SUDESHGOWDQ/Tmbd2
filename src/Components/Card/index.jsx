import './index.css'
import { trimString } from '../../utils/stringUtils'

export function Card({children}){
	return(
		<div className="Card">{children}</div>
	)
}
 
export function CardImage({src}){
	const fallbackImage = '/src/assets/fallbackImage.webp'; 
	return(
		<img 
			className="card-image" 
			src={src} 
			onError={(e) => e.target.src = fallbackImage}
		/>
	)
}

export function CardTitle({title}){
	return(
		<h2 className="card-title">{title}</h2>
	)
}

export function CardDate({date}){
	return(
		<p className="card-date">{date}</p>
	)
}

export function CardRating({rating}){
	return(
		<p className="card-rating">{rating}</p>
	)
}

export function CardDescription({description, maxLength = 100}){
	return(
		<p className="card-description">{trimString(description, maxLength)}</p>
	)
}