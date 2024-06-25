import ButtonSvg from '../assets/svg/ButtonSvg'

function Button({ className, href, children, onClick, px, white }) {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors
  hover:text-colo-1${px || 'px-7'} ${white ? 'text-n-8' : 'text-n-1'} ${className || ''}`
  const renderButton = () => (
    <button className={classes}>
      <span>{children}</span>
      {ButtonSvg(white)}
    </button>
  )
  return renderButton()
}

export default Button
