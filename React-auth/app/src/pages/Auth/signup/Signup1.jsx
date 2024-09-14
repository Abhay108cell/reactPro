import { Card, Container, Center, Text, Stack, FormControl, Input, FormLabel } from "@chakra-ui/react";
import React from "react";

const Signup1 = () => {
  return (
    <Container>
      <Center minHeight="100vh">
        <Card p="6" borderRadius="1rem" W="456px">
          <Text textStyle="h1" >Welcome to Crypto App</Text>
          <Text textStyle="p2" color="black.60" mt="4">Create a free account by filling data below.</Text>
          <Stack>
            <FormControl>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input for="name" placeholder="Enter your name..."/>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="surname">surname</FormLabel>
              <Input for="surname" placeholder="Enter your surname..."/>
            </FormControl>
          </Stack>
        </Card>
      </Center>
    </Container>
  );
};

export default Signup1;
