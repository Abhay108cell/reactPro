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

const ForgotPassword = () => {
  const ForgotPasswordVaildationScheme = object({
    email: string().email("Invalid Email").required("Email is Required"),
  });

  const { mutate, isSuccess, isLoading } = useMutation({
    mutationKey: ["send-verification-email"],
    mutationFn: sendVerificationEmail,
    onSuccess: (data) => {
      console.log(data);
      
      toast({
        title: "Verification Sent",
        description: "Please check your email",
        status: "success",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        status: "error",
      });
    },
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
            email: "",
            
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
          validationSchema={ForgotPasswordVaildationScheme}
        >
          {() => (
            <Form>
              <Stack mt="8" spacing={6}>
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
    </Container>
  );
};

export default ForgotPassword;
