import React from 'react'
import Section from './Section'
import { smallSphere, stars } from '../assets'

function Pricing() {
  return (
    <Section>
      <div className='overflow-hidden' id='pricing'>
        <div className='relative container z-2'>
          <div className='hidden relative justify-center mb-[6.5rem] lg:flex'>
            <img
              src={smallSphere}
              alt='sphere'
              className='relative z-1'
              width={255}
              height={255}
            />
            <div>
              <img src={stars} alt='stars' className='w-full ' />
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Pricing
