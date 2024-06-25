import React from 'react'

function Header() {
  return (
    <div className='fixed top-0 z-50 bg-n-8/90 backgrop-blur-sm border-b border-n-6 lg:bg-n-8/90 lg:backfrop-blur-sm'>
      <div className='flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4' />
      <a>
        <img src={brainwave} alt='' />
      </a>
    </div>
  )
}

export default Header
