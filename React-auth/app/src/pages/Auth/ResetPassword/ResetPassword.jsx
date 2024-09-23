import React from "react";
import Card from "../../../components/Card";
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
  Icon,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { object, string } from "yup";
import { Formik, Form, Field } from "formik";
import { FaArrowLeft } from "react-icons/fa";

const ResetPassword = () => {
  const ResetPasswordVaildationScheme = object({
    password: string().min(6, "password must be at least 6 charcters").required("Password is Required"),
    repeatPassword: string().oneOf([ref("password")], "Passwords do not match")
  });
  return (
    <Container>
      <Center minH="100vh">
        <Card>
          <Link to="/signin">
            <Icon as={FaArrowLeft} boxSize="6" />
          </Link>
          <Text mt="4" fontWeight="medium" textStyle="h1">
            Forgot Password
          </Text>
          <Text textStyle="p2" color="black.60" mt="4">
            Enter your email address for which account you want to reset your
            password.
          </Text>
          <Formik
            initialValues={{
              password: "",
              repeatPassword: "",
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
            validationSchema={ResetPasswordVaildationScheme}
          >
            {() => (
              <Form>
                <Stack mt="8" spacing={6}>
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
                  <Field name="repeatPassword">
                    {({ field, meta }) => (
                      <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <FormLabel htmlFor="repeatPassword">
                          Repeat Password
                        </FormLabel>
                        <Input
                          {...field}
                          name="repeatPassword"
                          type="password"
                          placeholder="Enter your repeatPassword...."
                        />{" "}
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Button w="full" type="submit">
                    Reset Password
                  </Button>
                </Stack>
              </Form>
            )}
          </Formik>
        </Card>
      </Center>
    </Container>
  );
};

export default ResetPassword;
