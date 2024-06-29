import React from 'react'
import Section from './Section'
import Heading from './Heading'
import { service1 } from '../assets'

function Services() {
  return (
    <Section>
      <div id='how-to-use' className='container'>
        <Heading
          title='Generative AI made for creators.'
          text='Brainwave unlocks the potencial of AI-powered applications'
        />
        <div className='relative'>
          <div className='relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]'>
            <div className='absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto'>
              <img
                className='w-full h-full object-cover md:object-right'
                width={800}
                height={730}
                src={service1}
              />
            </div>
            <div className='relative z-1 max-w-[17rem] ml-auto'>
              <h4>Smart AI</h4>
              <p>Brainwave unlocks the potential of AI-powered applications</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Services
