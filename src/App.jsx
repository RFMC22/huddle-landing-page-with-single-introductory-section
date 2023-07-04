import logo from './assets/logo.svg'
import Section from './components/Section'
import Socials from './components/Socials'
function App() {

  return (
    <>
      <header className='md:pt-[64px] md:pl-[80px] pt-[38.2px] pl-[40px]'>
        <img src={logo} alt="Logo Huddle" className='block md:w-[200px] w-[120px]'/>
      </header>
      <Section/>
      <Socials/>
    </>
  )
}

export default App
