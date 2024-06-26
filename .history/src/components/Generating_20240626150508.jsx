import React from 'react'
import { loading } from '../assets'

function Generating({ className }) {
  return (
    <div
      className={`flex items-center h-[3.5] px-6 bg-n-8/80 rouned-[1.7rem] ${className || ''}`}
    >
      <img src={loading} alt='Loading' className='w-5 h-5 mr-4' />
      Ai is generating
    </div>
  )
}

export default Generating
