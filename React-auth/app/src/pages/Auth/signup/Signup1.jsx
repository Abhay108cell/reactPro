import { Card, Container, Center, Text } from "@chakra-ui/react";
import React from "react";

const Signup1 = () => {
  return (
    <Container>
      <Center minHeight="100vh">
        <Card p="6" borderRadius="1rem" W="456px">
          <Text textStyle="h1" mt="4">Welcome to Crypto App</Text>
          <Text textStyle="p2" color="black.60">Create a free account by filling data below.</Text>
          <Stack>
            <FormControl></FormControl>
          </Stack>
        </Card>
      </Center>
    </Container>
  );
};

export default Signup1;
