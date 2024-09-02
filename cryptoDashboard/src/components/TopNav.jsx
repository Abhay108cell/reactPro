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

const TopNav = () => {
  return (
    <Box boxShadow="xl">
      <HStack
        maxWidth="60rem"
        mx="auto"
        h="16px"
        justify="space-between"
        px="32"
      >
        <Heading fontSize="28px">Dashboard </Heading>
        <Menu>
          <MenuButton as={Button}>
            <Icon
            as={FaCircleUser}           />
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
  );
};

export default TopNav;
