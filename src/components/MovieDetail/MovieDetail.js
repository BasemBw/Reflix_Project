import React from 'react'
import { useParams } from 'react-router-dom'
import './MovieDetail.css'

const MovieDetail =(props)=> {
  const {id} = useParams()
  let movieToShow = props.movies.filter(movie => movie.id === parseInt(id))
  movieToShow = movieToShow[0]
  return(
      <div className='movieContainer'>
          <p>{movieToShow.title} {movieToShow.year}</p>
          <img id='IMG' alt={movieToShow.title}  src={movieToShow.img}/>
          <p>{movieToShow.descrShort}</p>
      </div>
  )
}


export default MovieDetail