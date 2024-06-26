import React from 'react'
import { notificationImages } from '../constants'
import { notification1 } from '../assets'

function Notification({ className, title }) {
  return (
    <div
      className={`${className || ''} flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}
    >
      <img src={notification1} alt='' />

      <div className='flex-1'>
        <h6 className='mb-1 font-semibold justify-between'>{title}</h6>
        <div className='flex items-center justify-between'>
          <ul className='flex -m-0.5'>
            {notificationImages.map((image, index) => (
              <li
                key={index}
                className='flex w-6 h-6 border-2 border-n-12 rounded-full overflow-hidden'
              >
                <img
                  src={image}
                  className='w-full'
                  alt='item'
                  width={20}
                  height={20}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Notification
