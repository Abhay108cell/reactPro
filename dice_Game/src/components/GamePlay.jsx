import React from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";


const GamePlay = () => {
  return (
    <MainContainer>
      <div className="top_section">
        <NumberSelector />
        <TotalScore />
      </div>
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
.top_section{
  display: flex;
  justify-content: space-between;
}
`;
