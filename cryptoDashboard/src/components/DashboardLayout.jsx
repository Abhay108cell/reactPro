import { Box, Container, Flex, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import Sidenav from './Sidenav'
import TopNav from './TopNav'
import SideDrawer from './SideDrawer'

const DashboardLayout = ({title, children}) => {

  const {isOpen, OnClose, OnOpen} = useDisclosure

  return (
   <Box>
       <Flex>
        <SideDrawer isOpen={isOpen} OnClose={OnClose}  />
      <Sidenav/>
      <Box flexGrow="1">
      <TopNav title={title}/> 
      <Container maxW="70rem" bg="red">{children}</Container>
      </Box>
      </Flex>
   </Box>
  )
}

export default DashboardLayout;