import { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Home from './components/home'
import Work from './components/work'
import Contact from './components/contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Home />
      </div>
      <div>
        <Work />
      </div>
      <div>
        <Contact />
      </div>
    </>
  )
}

export default App
