import React from 'react'
import Section from './Section'
import { smallSphere } from '../assets'

function Pricing() {
  return (
    <Section>
      <div className='overflow-hidden' id='pricing'>
        <div className='relative container z-2'>
          <div className='hidden relative justify-center mb-[6.5rem] lg:flex'>
            <img src={smallSphere} alt='' />
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Pricing
