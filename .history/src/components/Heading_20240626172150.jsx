import React from 'react'

function Heading({ title, className }) {
  return <div>{title && <h2 className='h2'>{title}</h2>}</div>
}

export default Heading
