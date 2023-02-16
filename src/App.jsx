import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { About } from './components/About'
import { Conversor } from './components/Conversor'
import { Navbar } from './components/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{margin: 15}}>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/ux-table" element={<Conversor />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
