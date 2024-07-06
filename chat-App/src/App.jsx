import { useState } from 'react'
import {ChatEngine} from "react-chat-engine";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <div className="App">
    <ChatEngine
    height="100vh"
    projectID="692aa9c2-d73e-4086-8798-4b1eded86b08"
    userName="ram"
    userSecret="qwerty"
    />
  </div>
    </>
  )
}

export default App
