import Section from './Section'
import Button from './Button'
import curve from '../assets/hero/curve.png'
import { useRef } from 'react'
import { heroBackground, robot } from '../assets'
// import { BackgroundCircles, BottomLine, Gradient } from './design/Hero'
// import { heroIcons } from '../constants'

function Hero() {
  const parallaxRef = useRef(null)

  return (
    <Section
      className='pt-[12rem] -mt-[5.25rem]'
      crosses
      crossesOffset='lg:translate-y-[5.25rem]'
      customPaddings
      id='hero'
    >
      <div className='container relative' ref={parallaxRef}>
        <div
          className='z-1 relative max-w-[62rem]
        mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]'
        >
          <h1 className='h1 mb-6'>
            Explore the Possibilities of AI chatting with Brainwave
            <span className='inline-block relative'>
              Brainwave{' '}
              <img
                src={curve}
                alt='curve'
                className='absolute top-full left-0 w-full xl:-mt-2'
                width={624}
                height={28}
              />
            </span>
          </h1>
          <p className='body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8'>
            Unleash the power of AI within Brainwave. Upgrade your productivity
            with Brainwave, the open AI chat app.{' '}
          </p>
          <Button href='/pricing' white className='cursor-pointer'>
            Get Started
          </Button>
        </div>
        <div className='relative max-w-[23rem] mx-auto md:max-w-5 xl:mb-24'>
          <div className='relative z-1 p-0.5 rounded-2xl bg-conic-gradient'>
            <div className='relative bg-n-8 rounded-[1rem]'>
              <div className='h-[1.4rem] bg-n-10 rounded-t-[0.9rem]' />
              <div className='aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]'>
                <img
                  className='w-full'
                  src={robot}
                  alt='robot'
                  width={1024}
                  height={490}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]'>
          <img
            src={heroBackground}
            alt='herobg'
            className='w-full'
            width={1440}
            height={1800}
          />
        </div>
      </div>
    </Section>
  )
}

export default Hero
