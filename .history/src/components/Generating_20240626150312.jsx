import React from 'react'
import { loading } from '../assets'

function Generating() {
  return (
    <div>
      <img src={loading} alt='Loading' className='h-5 h-5 mr-4' />
      Ai is generating
    </div>
  )
}

export default Generating
