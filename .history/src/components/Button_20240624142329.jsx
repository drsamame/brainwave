import ButtonSvg from '../assets/svg/ButtonSvg'

function Button({ className, href, children, onClick, px, white }) {
  const classes = 'button relative inline-flex items-center justify-center'
  const renderButton = () => (
    <button className={classes}>
      <span>{children}</span>
      {ButtonSvg(white)}
    </button>
  )
  return renderButton()
}

export default Button
