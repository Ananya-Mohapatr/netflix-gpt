import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movies = useSelector(store =>store.movies)
  return (
    movies.nowPlayingMovies && 
    <div className='-mt-52 relative z-20 bg-black'>
        <MovieList title = {"Now Playing"} movies = {movies.nowPlayingMovies}/>
        <MovieList title = {"Trending"} movies = {movies.nowPlayingMovies}/>
        <MovieList title = {"Most Popular"} movies = {movies.popularMovies}/>
       
        </div>
  )
}

export default SecondaryContainer