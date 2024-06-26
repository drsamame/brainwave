import React from 'react'

function Notification({ className, title }) {
  return (
    <div className={`${className || ''} flex items-center pr-4 pr-6 bg-n-9/40`}>
      {title}
    </div>
  )
}

export default Notification
