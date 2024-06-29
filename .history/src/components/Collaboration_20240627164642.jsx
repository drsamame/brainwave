import { brainwaveSymbol, check } from '../assets'
import { collabContent, collabText } from '../constants'
import Section from './Section'
import Button from './Button'

function Collaboration() {
  return (
    <Section>
      <div className='container lg:flex'>
        <div className='max-w-[25rem]'>
          <h2 className='h2 mb-4 md:mb-8'>
            AI Chat App for seamless collaboration
          </h2>
          <ul className='max-w-[22rem] mt-10 md:mb-14'>
            {collabContent.map((content) => (
              <li className='mb-3 py-3' key={content.id}>
                <div className='flex items-center'>
                  <img src={check} width={24} height={24} alt='check' />
                  <h6 className='ml-5 body-2'>{content.title}</h6>
                </div>
                {content.text && (
                  <p className='body-2 mt-3 text-n-4'>{content.text}</p>
                )}
              </li>
            ))}
          </ul>
          <Button>Try it now</Button>
        </div>
        <div className='lg:ml-auto xl:w-[38rem]'>
          <p className='body-2 mb-4 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto'>
            {collabText}
          </p>
          <div className='relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100'>
            <div className='flex w-60 aspect-square m-auto border border-n-6 rounded-full'>
              <div className='w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full'>
                <div className='flex items-center justify-center w-full h-full bg-n-8 rounded-full'>
                  <img
                    src={brainwaveSymbol}
                    width={48}
                    height={48}
                    alt='brainwave'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Collaboration
