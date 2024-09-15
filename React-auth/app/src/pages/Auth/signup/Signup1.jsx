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
  Button,
  Link,
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
          <Stack mt="10" spacing={6}>
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
              <Text textStyle="p3">
              I agree with <Text as="span" color="p.purple">
                  Terms and Conditions
                </Text>
              </Text>
              </Checkbox>
              <Button>Create Account</Button>
              <Text textStyle="p3" color="black.60" textAlign="center">Already have an account ? <Link to="/login">Log In</Link></Text>
          </Stack>
        </Card>
      </Center>
    </Container>
  );
};

export default Signup1;
