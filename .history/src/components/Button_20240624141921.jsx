import ButtonSvg from './assets/svg/ButtonSvg'

function Button({ className, href, children, onClick, px, white }) {
  return (renderButton = () => (
    <button>
      <span>{children}</span>
      {ButtonSvg(white)}
    </button>
  ))
}

export default Button
