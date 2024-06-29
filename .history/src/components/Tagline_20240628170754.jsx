import brackets from '../assets/svg/Brackets'
function Tagline({ className, Children }) {
  return (
    <div className={`tagline flex items-center ${className || ''}`}>
      {brackets('left')}
      <div className='mx-3 text-n-3'>{Children}</div>
      {brackets('right')}
    </div>
  )
}

export default Tagline
