import React from 'react'
import Sidenav from '../../components/Sidenav'
import TopNav from '../../components/TopNav'
import { Flex,Box } from '@chakra-ui/react'

const Dashboard = () => {
  return (
    <div>
      <Flex>
      <Sidenav/>
      <Box flexGrow="1">
      <TopNav/> 
      </Box>
      </Flex>
      
    </div>
  )
}

export default Dashboard
