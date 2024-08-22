import { useState } from "react";
import styled from "styled-components";

const RollDice = () => {

  const [currentDice, setCurrentDice] = useState();

  const generateRandomeNumber = (min, max) =>{
    return Math.random() * (max - min)+ min;
  }

  return (
    <DiceContainer>
      <div className="dice"
      onClick={() =>generateRandomeNumber(1,6)} >
        <img src="/images/dice/dice_1.png" alt="dice 1" />
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
