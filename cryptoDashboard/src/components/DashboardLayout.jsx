import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react";
import React from "react";
import Sidenav from "./Sidenav";
import TopNav from "./TopNav";
import SideDrawer from "./SideDrawer";

const DashboardLayout = ({ title, children }) => {
  const { isOpen, OnClose, OnOpen } = useDisclosure();

  return (
    
      <Flex>
        <Box
          display={{
            base: "none",
            lg: "flex",
          }}
        >
          <Sidenav />
        </Box>
        <SideDrawer isOpen={isOpen} OnClose={OnClose} />
        <Box flexGrow="1">
          <TopNav title={title} OnOpen={OnOpen} />
          <Container maxW="70rem" bg="red">
            {children}
          </Container>
        </Box>
      </Flex>
  );
};

export default DashboardLayout;
