import {
  Card,
  Container,
  Center,
  Text,
  Stack,
  FormControl,
  Input,
  FormLabel,
  Flex,
  Checkbox,
} from "@chakra-ui/react";
import React from "react";

const Signup1 = () => {
  return (
    <Container>
      <Center minHeight="100vh">
        <Card p="6" borderRadius="1rem" W="456px">
          <Text textStyle="h1">Welcome to Crypto App</Text>
          <Text textStyle="p2" color="black.60" mt="4">
            Create a free account by filling data below.
          </Text>
          <Stack mt="10">
            <Flex gap="4">
              <FormControl>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input for="name" placeholder="Enter your name..." />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="surname">surname</FormLabel>
                <Input for="surname" placeholder="Enter your surname..." />
              </FormControl>
            </Flex>
            <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input for="email" type="email" placeholder="Enter your email..." />
              </FormControl>
            <FormControl>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input for="password" type="password" placeholder="Enter your password..." />
              </FormControl>
            <FormControl>
                <FormLabel htmlFor="repeatPassword">Repeat Password</FormLabel>
                <Input for="repeatPassword" type="password" placeholder="Enter your repeat Password..." />
              </FormControl>
              <Checkbox>
                I agree with <Text as="span" color="p.purple">
                  Terms and Conditions
                </Text>
              </Checkbox>
          </Stack>
        </Card>
      </Center>
    </Container>
  );
};

export default Signup1;
