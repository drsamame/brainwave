import React from 'react'
import Section from './Section'
import Heading from './Heading'

function Benefits() {
  return (
    <Section id='features'>
      <div className='container relative z-1'>
        <Heading
          title='Chat Smarter, Not Harder with Brainwave'
          className='md:max-w-md lg:max-w-2xl'
        />
      </div>
    </Section>
  )
}

export default Benefits
