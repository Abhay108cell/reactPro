import { Card as ChakraCard } from '@chakra-ui/react'
import React from 'react'

const Card = () => {
  return (
    <ChakraCard
    bg={{
      base: "transparent",
      md: "white",
    }}
    p={{
      base: "0",
      md: "6",
    }}
    borderRadius={{
      base: "none",
      md: "1rem",
    }}
    boxShadow={{
      base: "none",
      md: "0 4px 20px rgba(0, 0, 0, 0.05)",
    }}
    w="456px"
  >
    </ChakraCard>
  )
}

export default Card