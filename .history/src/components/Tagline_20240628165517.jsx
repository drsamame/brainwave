import React, { Children } from 'react'

function Tagline({ className, Children }) {
  return <div className='tagline flex items-center'>{Children}</div>
}

export default Tagline
