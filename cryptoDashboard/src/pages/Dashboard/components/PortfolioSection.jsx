import { HStack, Stack,Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineInfoCircle } from 'react-icons/ai'

const PortfolioSection = () => {
  return (
    <HStack>
      <Stack>
        <HStack>
          <Text>Total Portfolio Value</Text>
        </HStack>
        <Icon
        as={AiOutlineInfoCircle}
        /> 
      </Stack>
    </HStack>
  )
}

export default PortfolioSection