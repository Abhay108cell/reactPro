import { useState } from 'react' 
import './App.css'
import NavBar from './components/Navigation/NavBar'
import ContactHeader from './components/contactHeader/ContactHeader'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavBar/>
     <ContactHeader/>
     </>
  )
}

export default App
