import React, { useState } from "react";
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
  useToast,
} from "@chakra-ui/react";
import { Link,  useNavigate } from "react-router-dom";
import { object, string } from "yup";
import { Formik, Form, Field } from "formik";
import { FaArrowLeft } from "react-icons/fa";
import { useMutation } from "@tanstack/react-query";
import { sendForgotmail } from "../../../Api/Query/userQuery";

const ForgotPassword = () => {
  const ForgotPasswordVaildationScheme = object({
    email: string().email("Invalid Email").required("Email is Required"),
  });

  const [email, setEmail] = useState("")

const toast = useToast();
const navigate = useNavigate()

  const { mutate, isSuccess, isLoading } = useMutation({
    mutationKey: ["forgot-email"],
    mutationFn: sendForgotmail,
    onSettled: (data) => {
      console.log(data);
     navigate(`/Forgot-Password-send/${email}`)
    },
    onError: (error) => {
      toast({
        title: " Forgot  Error",
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
            setEmail((prev)=> ( prev = values.email))
             mutate({email: values.email});
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
