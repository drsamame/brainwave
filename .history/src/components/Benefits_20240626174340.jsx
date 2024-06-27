import React from 'react'
import Section from './Section'
import Heading from './Heading'
import { benefits } from '../constants'

function Benefits() {
  return (
    <Section id='features'>
      <div className='container relative z-2'>
        <Heading
          title='Chat Smarter, Not Harder with Brainwave'
          className='md:max-w-md lg:max-w-2xl'
        />
        <div className='flex flex-wrap gap-10 mb-10'>
          {benefits.map((benefit, index) => (
            <div key={index} className='flex flex-col items-center text-center'>
              <div>
                <h5 />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Benefits
