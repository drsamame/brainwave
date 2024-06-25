import ButtonGradient from './assets/svg/ButtonGradient'
import Button from './components/Button'
function App() {
  return (
    <>
      <h1 className='text-3xl font-bold underline'>Hello World</h1>
      <ButtonGradient />
      <div className='pt-[4.7 5rem] lg:pt[5.25rem] overflow-hidden'>
        <Button>Something</Button>
      </div>
    </>
  )
}

export default App
