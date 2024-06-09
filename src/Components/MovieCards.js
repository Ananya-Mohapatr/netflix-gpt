import React from 'react'
import { IMG_CDN } from '../utils/Constant'

const MovieCards = ({posterCard}) => {
  if(!posterCard) return ;

  return (
    <div className='w-36 md:w-48 ml-5 mr-5'>
        <img alt ="Movie Card" src={IMG_CDN+posterCard}/>
    </div>
  )
}

export default MovieCards