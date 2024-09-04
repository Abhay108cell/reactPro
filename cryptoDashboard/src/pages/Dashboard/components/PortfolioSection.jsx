import { HStack, Stack,Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineInfoCircle } from 'react-icons/ai'

const PortfolioSection = () => {
  return (
    <HStack bg="white" borderRadius="xl" p="6">
      <Stack>
        <HStack color="black.80">
          <Text fontSize="sm">Total Portfolio Value</Text>
        <Icon
        as={AiOutlineInfoCircle}
        /> 
        </HStack>
        <Text textStyle="h2">$122,23.54 </Text>
      </Stack>
    </HStack>
  )
}

export default PortfolioSection