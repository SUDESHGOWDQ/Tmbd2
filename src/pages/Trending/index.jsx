import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MovieContext } from '../../context/MovieContext';
import { Card, CardTitle, CardImage, CardRating, CardDate,CardDescription } from '../../Components/Card/index';
import Loader from '../../Components/Loader/index';
import Pagination from '../../components/Pagination';
import './index.css';

const Index = () => {
  const { trendingMovies,loading } = useContext(MovieContext);

  const image_Url = "https://image.tmdb.org/t/p/original";

  if (loading) {
	return <Loader/>;
  }

  return (
    <div className='Home'>
      {
        trendingMovies.map((item) => {
          return (
            <Card key={item.id}>
              <Link to={`/movie/${item.id}`}><CardImage src={`${image_Url}/${item.poster_path}`} /></Link>
              <CardTitle title={item.title} />
			  <CardDescription description={item.overview} maxLength={150}/>
              <CardDate date={item.release_date} />
              <CardRating rating={item.vote_average} />
            </Card>
          );
        })
      }
	  <Pagination/>
    </div>
  );
};

export default Index;