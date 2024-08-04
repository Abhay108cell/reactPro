import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Nike from './components/Nike'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <NavBar/>
   <Nike/>
   
    </>
  )
}

export default App
