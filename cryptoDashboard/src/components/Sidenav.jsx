import React from 'react'
import { HStack, Icon, Stack, Text,Heading } from '@chakra-ui/react'
import { RxDashboard } from "react-icons/rx";
import { BsArrowDownUp } from 'react-icons/bs';

const Sidenav = () => {
  const navLink = [
    {
      icon: RxDashboard,
      text: 'Dashboard', 
       path: '/' },
    {
      icon: BsArrowDownUp ,
      text: 'Transactions', 
       path: '/transaction' },
  ]

  return (
   <Stack boxShadow="sm" maxW="16rem" h="100vh" bg="red">
    <Heading 
    textAlign="center"
    fontSize="20px" pt="3.5rem" as="h1">Crypto Project</Heading>
    {navLink.map((nav)=>(
      <HStack
      mx="3px"
      key={nav.text}
      >
        <Icon as={nav.icon}/>
        <Text>{nav.text}</Text>
      </HStack>
    ))}
   </Stack>

  )
}

export default Sidenav
