import { useState } from 'react' 
import './App.css'
import NavBar from './components/Navigation/NavBar'
import style from './NavBar.Moduel.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavBar/>
    </>
  )
}

export default App
