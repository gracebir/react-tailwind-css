import React from 'react'
import { movie } from '../App'
import MovieCard from './MovieCard'

type movieListProp = {
    movies: movie[]
}

function Movielist({movies}: movieListProp) {
  
  return (
    <div className='flex flex-col gap-4'>
      {movies?.map((movie,i )=>(
        <MovieCard key={i} name={movie.name} duration={movie.duration} ratings={movie.ratings}/>
      ))}
    </div>
  )
}

export default Movielist
