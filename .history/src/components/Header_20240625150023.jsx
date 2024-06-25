import { brainwave } from '../assets'
import { navigation } from '../constants'
import Button from './Button'
import { useLocation } from 'react-router-dom'
import MenuSvg from '../assets/svg/MenuSvg'
import { HamburgerMenu } from './design/Header'
import { useState } from 'react'
import { disablePageScroll, enablePageScroll } from 'scroll-lock'

function Header() {
  const { hash } = useLocation()
  const [openNavigation, setOpenNavigation] = useState(false)
  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false)
      enablePageScroll()
    } else {
      setOpenNavigation(true)
    }
  }
  const handleClick = () => {
    setOpenNavigation(false)
    disablePageScroll()
  }
  return (
    <div
      className={`fixed left-0 w-full top-0 z-50 border-b border-n-6
     lg:bg-n-8/90 lg:backdrop-blur-sm ${openNavigation ? 'bg-n-8' : 'bg-n-8/90 backdrop-blur-sm'}`}
    >
      <div className=' flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4'>
        <a className='block w-[12rem] xl:mr-8' href='#hero'>
          <img src={brainwave} width={190} height={40} alt='brainwave' />
        </a>
        <nav
          className={`${openNavigation ? 'flex' : 'hidden'} overflow-hidden fixed top-[5rem] left-0 right-0 bottom-0 
          bg-n-8 lg:static lg-flex lg:mx-auto lg:bg-transparent`}
        >
          <div className='relative flex z-2 items-center flex-col m-auto lg:flex-row'>
            {navigation.map((item) => (
              <a
                className={`block relative font-code text-2xl uppercase 
                  text-n-1 transition-colors hover:text-color-1
                ${item.onlyMobile ? 'lg:hidden' : ''} px-6 py-6 md:py-8 lg:mr-0.25 
                lg:text-xs lg:font-semibold ${item.url === hash ? 'z-2 lg:text-n-1' : 'lg:text-n-1/50'}
                 lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                key={item.id}
                href={item.url}
                onClick={handleClick}
              >
                {item.title}
              </a>
            ))}
          </div>
          <HamburgerMenu />
        </nav>
        <a
          href='#signup'
          className='button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block'
        >
          New Account
        </a>
        <Button className='hidden lg:flex' href='#login'>
          Sign In
        </Button>
        <Button
          onClick={toggleNavigation}
          className='ml-auto lg:hidden'
          px='px-3'
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  )
}

export default Header
