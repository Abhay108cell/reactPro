import {
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
  Box,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { object, string } from "yup";
import { Formik, Form, Field } from "formik";
import Card from "../../../components/Card";
import { useMutation } from "@tanstack/react-query";
import { signinUser } from "../../../Api/Query/userQuery";

const signinVaildationScheme = object({
  email: string().email("Invalid Email").required("Email is Required"),
  password: string()
    .min(6, "password must be at least 6 charcters")
    .required("Password is Required"),
});
const Signin = () => {
  const toast = useToast();
  const {mutate, isLoading,} = useMutation({
    mutationKey: ["signin"],
    mutationFn: signinUser,
    onSuccess: (data) => {
      const {token} = data;
      
    },
    onError: (error) =>{
      toast({
        title: "signin Error",
        description: error.message,
        status: "error",
        });
    }
  })

  
  return (
    <Container bg="white">
      <Center minHeight="100vh">
        <Card>
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
              mutate(values)
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
                  <HStack justify="space-between">
                    <Checkbox>
                      <Text textStyle="p3">Remember me</Text>
                    </Checkbox>

                    <Link to="/forget-password">
                      <Text textStyle="p3" as="span" color="p.purple">
                        Forget password?
                      </Text>
                    </Link>
                  </HStack>
                  <Box>
                    <Button isLoading={isLoading} w="full" type="submit">
                      Login
                    </Button>
                    <Link to="/signup">
                      <Button variant="outline" mt="3" w="full">
                        Create Account
                      </Button>
                    </Link>
                  </Box>
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
