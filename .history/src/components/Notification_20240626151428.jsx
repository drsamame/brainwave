import React from 'react'

function Notification({ className, title }) {
  return (
    <div className={`${className || ''} flex items-center pr-4`}>{title}</div>
  )
}

export default Notification
