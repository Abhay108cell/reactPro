import React from "react";
import { HStack, Icon, Stack, Text, Heading, Box } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { BsArrowDownUp } from "react-icons/bs";

const Sidenav = () => {
  const navLink = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      path: "/",
    },
    {
      icon: BsArrowDownUp,
      text: "Transactions",
      path: "/transaction",
    },
  ];

  return (
    <Stack boxShadow="sm" maxW="16rem" h="100vh" >
      <Heading textAlign="center" fontSize="20px" pt="3.5rem" as="h1">
        Crypto Project
      </Heading>
      <Box mt="6px" mx="3px">
        {navLink.map((nav) => (
          <HStack  key={nav.text} 
          py="3" 
           px="4"
           _hover={{
            bg: "#f3f3f7",
           }}
          >
            <Icon as={nav.icon} />
            <Text fontSize="14px">{nav.text}</Text>
          </HStack>
        ))}
      </Box>
    </Stack>
  );
};

export default Sidenav;
