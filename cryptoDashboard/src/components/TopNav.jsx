import {
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  HStack,
  Box,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import { FaCircleUser } from "react-icons/fa6";

const TopNav = ({title}) => {
  return (
    <Box>
      <HStack
        maxWidth="70rem"
        mx="auto"
        h="16"
        justify="space-between"
        
      >
        <Heading fontSize="28px"
        fontWeight="medium" 
        >{title} </Heading>
        <Menu>
          <MenuButton as={Button}>
            <Icon
            as={FaCircleUser} 
            fontSize="24px"
            />
          </MenuButton>
          <MenuList>
            <MenuItem>Support</MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default TopNav;
