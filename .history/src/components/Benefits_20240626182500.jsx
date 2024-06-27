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
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className='block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]'
              style={{ backgroundImage: `url(../${benefit.backgroundUrl})` }}
            >
              <img src='assets/benefits/card-1.svg' alt='' />
              <div className='relative z-2 flex flex-col min-h-[22rem]'>
                <h5>{benefit.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Benefits
