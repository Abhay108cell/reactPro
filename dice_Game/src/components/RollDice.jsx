import { useState } from "react";
import styled from "styled-components";

const RollDice = () => {

  const [currentDice, setCurrentDice] = useState(1);

  const generateRandomeNumber = (min, max) =>{
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

   const roleDice = ()=>{
    const randomDice = generateRandomeNumber(1, 6);

    setCurrentDice((prev)=> randomDice);

   }



  return (
    <DiceContainer>
      <div className="dice"
      onClick={roleDice} >
        <img src={`/images/dice/dice_${currentDice}.png`} alt="dice 1" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RollDice

const DiceContainer = styled.div`
display: flex;
margin-top: 48px;
flex-direction: column;
align-items: center; 

.dice{
cursor: pointer;
}

p{
  font-size: 24px;
}

`
