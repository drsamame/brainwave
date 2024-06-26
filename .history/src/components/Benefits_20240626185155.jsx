import React from 'react'
import Section from './Section'
import Heading from './Heading'
import { benefits } from '../constants'
import Arrow from '../assets/svg/Arrow'

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
              style={{ backgroundImage: `url(${benefit.backgroundUrl})` }}
            >
              <div className='relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none'>
                <h5 className='h2 mb-5'>{benefit.title}</h5>
                <p className='body-2 mb-6 text-n-3'>{benefit.text}</p>
                <div className='flex items-center mt-auto'>
                  <img
                    width={48}
                    height={48}
                    src={benefit.iconUrl}
                    alt={benefit.title}
                  />
                  <p className='ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider'>
                    Explore more
                  </p>
                  <Arrow />
                </div>
              </div>
              {benefit.light && <GradientLight />}
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Benefits
