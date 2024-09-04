import { HStack, Stack,Icon } from '@chakra-ui/react'
import React from 'react'

const PortfolioSection = () => {
  return (
    <HStack>
      <Stack>
        <HStack>Total Portfolio Value</HStack>
        <Icon
        as={AiOutlineInfoCircle}
        /> 
      </Stack>
    </HStack>
  )
}

export default PortfolioSection