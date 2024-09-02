import {  Heading,Menu, MenuButton,MenuList, MenuItem, Button, HStack, Box } from '@chakra-ui/react'
import React from 'react'

const TopNav = () => {
  return (
    <Box>

   <HStack maxWidth="60rem" mx="auto" boxShadow="xl" h="16px" justify="space-between" px="32">
        
          <Heading >Dashboard </Heading>
          <Menu>
  <MenuButton as={Button}>
    Actions
  </MenuButton>
  <MenuList>
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>
        
   </HStack>
    </Box>
  )
}

export default TopNav
