import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Portfolio from './pages/Portfolio'
import Landing from './pages/Landing'


function App() {
  return (
    <div className="content">
      <Router>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/portfolio" element={<Portfolio />} />

        </Routes>
      </Router>
    </div>
   
  )
}

export default App
