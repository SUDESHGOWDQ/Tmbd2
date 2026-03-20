import React from 'react'
import Home from './Home'
import SidePanel from './SidePanel'
import Loader from '../../components/Loader'
import {MovieContext} from '../../context/movieContext'
import Pagination from '../../components/Pagination'
import './index.css'

const Index = () => {
	  const {movie,loading} = React.useContext(MovieContext)
  return (
	<div className="main">
     <div className="main-left">
     <SidePanel />
     </div>
     <div className="main-right">
     {loading ? (
		<Loader/>
	  ) : (
		<>
		<Home movie={movie} />
		<Pagination />
		</>
	  )}
     </div>
    </div>
  )
}

export default Index