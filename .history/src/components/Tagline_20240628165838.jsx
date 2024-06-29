import brackets from '../assets/svg/Brackets'
function Tagline({ className, Children }) {
  return (
    <div className={`tagline flex items-center ${className || ''}`}>
      {brackets('left')}
      {Children}
      {brackets('right')}
    </div>
  )
}

export default Tagline
