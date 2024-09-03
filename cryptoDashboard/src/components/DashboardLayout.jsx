import { Box, Container, Flex } from '@chakra-ui/react'
import React from 'react'
import Sidenav from './Sidenav'
import TopNav from './TopNav'

const DashboardLayout = ({title, children}) => {
  return (
   <Box>
       <Flex>
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