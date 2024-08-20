import { useState } from 'react'
import './App.css'
import StartGame from './components/StartGame'
// import styled from "styled-components";

function App() {

  const [isGameStarted, setIsGameStarted] = useState(false)

  const toogleGamePlay = () =>{
    setIsGameStarted((prev)=> !prev);
  }
  
  
  return (
    <>
     
    <StartGame/>
       
    </>
  )
}

export default App
