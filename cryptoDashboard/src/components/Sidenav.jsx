import React from 'react'
import { HStack, Icon, Stack, Text } from '@chakra-ui/react'
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
   <Stack>
    {navLink.map((nav)=>(
      <HStack
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
