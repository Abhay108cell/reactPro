import React from 'react'
import Card from '../../../components/Card'
import { Icon, VStack } from '@chakra-ui/react'
import { MdEmail } from "react-icons/md";


const RegisterEmailVerify = () => {
  return (
    <Card>
      <VStack>
      <Icon as={MdEmail} boxSize="6" color="p.purple"/>
      </VStack>
    </Card>
  )
}

export default RegisterEmailVerify