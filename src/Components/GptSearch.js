import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_IMG_URL } from '../utils/Constant'

const GptSearch = () => {
  return (
    <>
    <div className='fixed -z-10'>
        <img className='h-screen object-cover md:w-screen' src= {BG_IMG_URL}
        alt = 'logo'/>
    </div>
    <div className=''>
        <GptSearchBar />
        <GptMovieSuggestion />
    </div>
    </>
  )
}

export default GptSearch