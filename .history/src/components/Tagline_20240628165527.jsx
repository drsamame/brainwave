import brackets from '../assets/brackets.svg'
function Tagline({ className, Children }) {
  return <div className='tagline flex items-center'>{Children}</div>
}

export default Tagline
