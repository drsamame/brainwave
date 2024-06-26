import React from 'react'
import { companyLogos } from '../constants'

function CompanyLogos({ className }) {
  return (
    <div className={className}>
      <h5 className='tagline mb-6 text-center text-n-1/50'>
        Helping People create beatiful content
      </h5>
      <ul className='flex'>
        {companyLogos.map((logo, index) => (
          <li key={index} className='flex items-center justify-center'>
            <img src={logo} width={134} height={28} alt={logo} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CompanyLogos
