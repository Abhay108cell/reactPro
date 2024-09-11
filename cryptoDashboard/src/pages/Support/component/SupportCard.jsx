import { Flex, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { IoMail } from 'react-icons/io5'

const SupportCard = () => {
  return (
    <Flex>
      <Stack>
        <Icon as={IoMail}/>
        <Text textStyle="h2" >Contact Us</Text>
      </Stack>
    </Flex>
  )
}

export default SupportCard