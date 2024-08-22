
import styled from "styled-components";

const RollDice = () => {
  return (
    <DiceContainer>
      <div>
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
p{
  font-size: 24px;
}

`
