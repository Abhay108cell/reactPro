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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { object, string } from "yup";
import { Formik, Form, Field } from "formik";

const ForgotPassword = () => {
  const ForgotPasswordVaildationScheme = object({
    email: string().email("Invalid Email").required("Email is Required"),
  });
  return (
    <Center minH="100vh">
      <Card>
        <Link>
        <Icon as={}/>
        </Link>
        <Text fontWeight="medium" textStyle="h1">
          Forgot Password
        </Text>
        <Text textStyle="p2" color="black.60" mt="4">
          Enter your email address for which account you want to reset your
          password.
        </Text>
        <Formik
          initialValues={{
            email: "",
            
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
          validationSchema={ForgotPasswordVaildationScheme}
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
                  <Button w="full" type="submit">
                    Reset Password
                  </Button>
              </Stack>
            </Form>
          )}
        </Formik>
      </Card>
    </Center>
  );
};

export default ForgotPassword;
