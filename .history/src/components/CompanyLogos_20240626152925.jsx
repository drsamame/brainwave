import React from 'react'

function CompanyLogos({ className }) {
  return (
    <div className={className}>
      <h5 className='tagline mb-6 text-center text-n-1/50'>
        Helping People create beratiful content
      </h5>
      <ul className='flex'>
        {CompanyLogos.map((logo, index) => (
          <li key={index}>
            <img src={logo} width={134} height={28} alt={logo} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CompanyLogos
