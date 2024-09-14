import { Card, Container, Center, Text } from "@chakra-ui/react";
import React from "react";

const Signup1 = () => {
  return (
    <Container>
      <Center minHeight="100vh">
        <Card p="6" borderRadius="1rem" W="408px">
          <Text textStyle="h1">Welcome to Crypto App</Text>
        </Card>
      </Center>
    </Container>
  );
};

export default Signup1;
