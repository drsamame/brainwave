import Section from './Section'
import Button from './Button'
import curve from '../assets/curve.svg'
import { BackgroundCircles, BottomLine, Gradient } from './design/Hero'
import { heroIcons } from '../constants'

function Hero() {
  const parallaxRef = useRef(null)

  return (
    <Section
      className='pt-[12rem] -mt-[5.25]'
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
            Explore the Possibilities of AI chatting with BrainwaveCurve
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
          <Button href='/pricing'>Get Started</Button>
        </div>
      </div>
    </Section>
  )
}

export default Hero
