import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <div className="w-screen min-h-screen bg-white overflow-x-hidden">
        <Navbar />
      </div>
    </Router>
  )
}

export default App
