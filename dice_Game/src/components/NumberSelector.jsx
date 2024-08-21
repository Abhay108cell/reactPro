import React from 'react'
import styled from "styled-components";


const NumberSelector = () => {
  return (
    <div>
      <Box>1</Box>
    </div>
  )
}

export default NumberSelector;

const Box = styled.div`
  height:72px;
  width:72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight:700;
  
`
