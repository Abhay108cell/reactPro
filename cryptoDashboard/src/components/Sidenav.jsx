import React from "react";
import { HStack, Icon, Stack, Text, Heading, Box } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { BsArrowDownUp } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";

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
    <Stack justifyContent="space-between" boxShadow="lg" w="16rem" h="100vh"
    
     >
      <Box>

      <Heading textAlign="center" fontSize="20px" pt="3.5rem" as="h1">
        Crypto Project
      </Heading>
      <Box mt="6" mx="3">
        {navLink.map((nav) => (
          <HStack  
          borderRadius="10px"
          key={nav.text} 
          py="3" 
           px="4"
           _hover={{
            bg: "#f3f3f7",
            color:"#171717",
           }}
           color="#797E82"
          >
            <Icon as={nav.icon} />
            <Text fontWeight="medium" fontSize="14px">{nav.text}</Text>
          </HStack>
        ))}
      </Box>
      </Box>

      <Box mt="6" mx="3" mb="6">
      <HStack  
          borderRadius="10px"
          py="3" 
           px="4"
           _hover={{
            bg: "#f3f3f7",
           }}
          >
            <Icon as={BiSupport} />
            <Text fontSize="14px">Support</Text>
          </HStack>

      </Box>
    </Stack>
  );
};

export default Sidenav;
