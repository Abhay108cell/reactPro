import { Flex, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { IoMail } from 'react-icons/io5'

const SupportCard = () => {
  return (
    <Flex>
      <Stack>
        <Icon as={IoMail}/>
        <Text as="h2" textStyle="h2" >Contact Us</Text>
        <Text fontSize="sm" color="black.60" >Have a question or just want to know more? Feel free to reach out to us.</Text>
      </Stack>
    </Flex>
  )
}

export default SupportCard