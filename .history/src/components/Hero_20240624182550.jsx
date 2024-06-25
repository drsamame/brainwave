import Section from './Section'
function Hero() {
  return (
    <Section
      className='pt-[12rem] -mt-[5.25]'
      crosses
      crossesOffset='lg:translate-y-[5.25rem]'
      customPaddings
      id='hero'
    >
      <div className='container relative' />
    </Section>
  )
}

export default Hero
