import Brackets from '../assets/svg/Brackets'
function Tagline({ className, Children }) {
  return (
    <div className={`tagline flex items-center ${className || ''}`}>
      {Children}
    </div>
  )
}

export default Tagline
