import React from 'react'
import MovieCards from './MovieCards'

const MovieList = ({ title, movies }) => {
    return (
        <div className='w-screen bg-black'>                
        <h1 className='text-2xl py-4 text-white'>{title}</h1>
        
        <div className='flex overflow-x-scroll w-screen'>
            <div className='flex'>
                {movies.map(movie=>{
                  return <MovieCards key={movie.id} posterCard={movie.poster_path}/>})}
            </div>
        </div>
        </div>
    )
}

export default MovieList