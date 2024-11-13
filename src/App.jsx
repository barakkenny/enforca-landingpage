import DreamJob from './components/DreamJob'
import Footer from './components/Footer'
import HeroComponent from './components/HeroComponent'
import NavbarComponent from './components/NavbarComponent'
import PartnerComponent from './components/PartnerComponent'
import Services from './components/Services'

function App() {

  return (
    <div className='w-full '>
      <NavbarComponent/>
      <HeroComponent />
      <PartnerComponent />
      <DreamJob />
      <Services />
      <Footer />
    </div>
  )
}

export default App
