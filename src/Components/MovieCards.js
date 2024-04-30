import React from 'react'
import { IMG_CDN } from '../utils/Constant'

const MovieCards = ({posterCard}) => {

  return (
    <div className='w-48 ml-5 mr-5'>
        <img alt ="Movie Card" src={IMG_CDN+posterCard}/>
    </div>
  )
}

export default MovieCards