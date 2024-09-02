import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import Sidenav from './Sidenav'
import TopNav from './TopNav'

const DashboardLayout = ({title}) => {
  return (
   <Box>
       <Flex>
      <Sidenav/>
      <Box flexGrow="1">
      <TopNav title={title}/> 
      </Box>
      </Flex>
   </Box>
  )
}

export default DashboardLayout
