import React from "react";
import { useState } from "react";
import styled from "styled-components";
useState;

const NumberSelector = ({setSelectedNumber, selectedNumber, error}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  console.log(selectedNumber);

  return (
    <NumberSelectorConatiner>
      <p className="error">{error}</p>
      <div className="flex">
        {arrNumber.map((value, i) => (
          <Box
            key={i}
            isSelected={value === selectedNumber}
            onClick={() => setSelectedNumber(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorConatiner>
  );
};

export default NumberSelector;

const NumberSelectorConatiner = styled.div`

.error{
  color: red;
  font-weight: 500;
}

display: flex;
flex-direction: column;
align-items: end;

  .flex {
    display: flex;
    gap: 24px;
  }
  .p {
    font-size: 24px;
    font-weight: 700px;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
`;
