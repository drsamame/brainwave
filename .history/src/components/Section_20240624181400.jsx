import React from 'react'

function Section({
  className,
  id,
  crosses,
  crossesOffset,
  customPaddings,
  children
}) {
  return (
    <div
      className={`relative 
        ${
          customPaddings ||
          `py-10 lg:py-16 xl:py-20 ${crosses ? 'lg:py-32 xl:py-40' : ''} ${className || ''}`
        }`}
    >
      {children}
      <div
        className='hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none
      lg:left-7.5 xl:right-10'
      />
    </div>
  )
}

export default Section
