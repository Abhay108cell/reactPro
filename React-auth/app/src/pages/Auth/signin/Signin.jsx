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
  HStack,
  Checkbox,
  Button,
  FormErrorMessage,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { object, string, ref } from "yup";
import { Formik, Form, Field } from "formik";

const Signin = () => {
  const signinVaildationScheme = object({
    email: string().email("Invalid Email").required("Email is Required"),
    password: string()
      .min(6, "password must be at least 6 charcters")
      .required("Password is Required"),
  });
  return (
    <Container>
      <Center minHeight="100vh">
        <Card p="6" borderRadius="1rem" w="456px">
          <Text fontWeight="medium" textStyle="h1">
            Welcome to Crypto App
          </Text>
          <Text textStyle="p2" color="black.60" mt="4">
            Enter your credentials to access the account.
          </Text>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
            validationSchema={signinVaildationScheme}
          >
            {() => (
              <Form>
                <Stack mt="10" spacing={6}>
                  <Field name="email">
                    {({ field, meta }) => (
                      <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <Input
                          {...field}
                          name="email"
                          type="email"
                          placeholder="Enter your email...."
                        />{" "}
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="password">
                    {({ field, meta }) => (
                      <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <Input
                          {...field}
                          name="password"
                          type="password"
                          placeholder="Enter your password...."
                        />{" "}
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                      <HStack>
                      <Checkbox>
                    <Text textStyle="p3">
                      Remember me
                    </Text>
                  </Checkbox>
                  <Text>
                    <Link to="/forget-password">
                    <Text textStyle="p3" as="span" color="p.purple">Forget password?</Text>
                    </Link>
                  </Text>
                      </HStack>
                  
                  <Button type="submit">Create Account</Button>
                  <Text textStyle="p3" color="black.60" textAlign="center">
                    Already have an account ?{" "}
                    <Link to="/signin">
                      <Text as="span" color="p.purple">
                        Log In
                      </Text>
                    </Link>
                  </Text>
                </Stack>
              </Form>
            )}
          </Formik>
        </Card>
      </Center>
    </Container>
  );
};

export default Signin;
