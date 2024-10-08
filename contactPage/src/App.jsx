import { useState } from 'react' 
import './App.css'
import NavBar from './components/Navigation/NavBar'
import ContactHeader from './components/contactHeader/ContactHeader'
import ContactForm from './components/contactForm/ContactForm'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavBar/>
     <main className="main_container">
     <ContactHeader/>
     <ContactForm/>
     </main>
     
     </>
  )
}

export default App
