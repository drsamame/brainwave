import ButtonGradient from './assets/svg/ButtonGradient'
import Button from './components/Button'
function App() {
  return (
    <>
      <h1 className='text-3xl font-bold underline'>Hello World</h1>

      <div className='pt-[4.7 5rem] lg:pt[5.25rem] overflow-hidden'>
        <Button className='mt-20' white href='#login'>
          Something
        </Button>
      </div>
      <ButtonGradient />
    </>
  )
}

export default App
