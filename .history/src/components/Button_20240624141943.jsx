import ButtonSvg from './assets/svg/ButtonSvg'

function Button({ className, href, children, onClick, px, white }) {
  const renderButton = () => (
    <button>
      <span>{children}</span>
      {ButtonSvg(white)}
    </button>
  )
  return renderButton()
}

export default Button
