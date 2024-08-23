import React from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RollDice from "./RollDice";
import { useState } from "react";

const GamePlay = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
const [score,setScore] = useState()


const generateRandomeNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const roleDice = () => {
  const randomDice = generateRandomeNumber(1, 6);

  setCurrentDice((prev) => randomDice);
};


  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore />
        <NumberSelector
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RollDice 
      currentDice={currentDice}
      roleDice={roleDice} />
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  padding-top: 70px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
`;
