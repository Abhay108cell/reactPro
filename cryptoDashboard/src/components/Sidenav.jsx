import React from "react";
import { HStack, Icon, Stack, Text, Heading, Box } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { BsArrowDownUp } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";

const Sidenav = () => {

     const location= useLocation()
     console.log(location);
     
     const isActiveLink = (link) =>{
      return location.pathname === link
     }

  const navLinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: BsArrowDownUp,
      text: "Transaction",
      link: "/transaction",
    },
  ];

  return (
    <Stack
    bg="white"
    justifyContent="space-between" 
    boxShadow={{
      base: "none",
      lg: "lg", 
    }}
     w={{
      base: "full",
      lg: "16rem",
     }}
      h="100vh">
      <Box>
        <Heading textAlign="center" fontSize="20px" pt="3.5rem" as="h1">
          Crypto Project
        </Heading>
        <Box mt="6" mx="3">
          {navLinks.map((nav) => (
            <Link to={nav.link} key={nav.text}>
            <HStack
              borderRadius="10px"
              py="3"
              px="4"
              bg={isActiveLink("/support") ? "#f3f3f7" : "transparent"}
              color={isActiveLink("/support") ? "#171717" : "#797E82"}
              _hover={{
                bg: "#f3f3f7",
                color: "#171717",
              }}
            >
              <Icon as={nav.icon} />
              <Text fontWeight="medium" fontSize="14px">
                {nav.text}
              </Text>
            </HStack>
            </Link>
          ))}
        </Box>
      </Box>

      <Box mt="6" mx="3" mb="6">
          <Link to="/support">
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
          </Link>
      </Box>
    </Stack>
  );
};

export default Sidenav;
