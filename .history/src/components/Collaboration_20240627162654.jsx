import { check } from '../assets'
import { collabContent } from '../constants'
import Section from './Section'
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
                  {content.text && (
                    <p className='body-2 mt-3 text-n-4'>{content.text}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}

export default Collaboration
