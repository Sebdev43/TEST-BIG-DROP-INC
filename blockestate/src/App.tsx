import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedProperties from './components/FeaturedProperties'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#0B1120]">
        <div className="flex-1">
          <Navbar />
          <Hero />
          <FeaturedProperties />
          <HowItWorks />
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
