import React from 'react'
import { HStack, Icon, Stack, Text } from '@chakra-ui/react'
import { RxDashboard } from "react-icons/rx";

const Sidenav = () => {
  const navLink = [
    {
      icon: RxDashboard,
      text: 'Dashboard', 
       path: '/' },
    {
      icon: RxDashboard ,
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
