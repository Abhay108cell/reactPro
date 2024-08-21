import React from 'react'
import { useState } from 'react';
import styled from "styled-components";
useState


const NumberSelector = () => {

  const arrNumber = [1,2,3,4,5,6];
  const [selectedNumber, setSelectedNumber] = useState();

  console.log(selectedNumber);
  

  return (
    
    <NumberSelectorConatiner>
      <div className='flex'>
      {arrNumber.map((value,i)=>(
        <Box key={i}
         isSelected ={value=== selectedNumber}
         onClick={()=>setSelectedNumber(value)}>
          {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorConatiner>
  );
}

export default NumberSelector;

const NumberSelectorConatiner = styled.div`
  .flex{
    display: flex;
    gap: 24px;
  }
  .p{
    font-size:24px;
    font-weight:700px
  }
`

const Box = styled.div`
  height:72px;
  width:72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight:700;
  background-color: ${(props)=>(props.isSelected ? "black" : "white")};
  color: ${(props)=>(!props.isSelected ? "black" : "white")};


`
