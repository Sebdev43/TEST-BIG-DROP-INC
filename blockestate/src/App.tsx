import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  return (
    <Router>
      <div className="w-screen min-h-screen bg-white overflow-x-hidden">
        <Navbar />
        <Hero />
      </div>
    </Router>
  )
}

export default App
