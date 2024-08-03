import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <nav>
      <div className="logo">
        <img src="/images/brand_logo.png" alt="" />
      </div>
    </nav>
    </>
  )
}

export default App
