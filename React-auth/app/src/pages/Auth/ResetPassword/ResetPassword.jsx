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
  Button,
  FormErrorMessage,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { object, string, ref } from "yup";
import { Formik, Form, Field } from "formik";
import { useMutation } from "@tanstack/react-query";
import { verfiyForgotToken } from "../../../Api/Query/userQuery";

const ResetPasswordVaildationScheme = object({
  password: string()
    .min(6, "password must be at least 6 charcters")
    .required("Password is Required"),
  repeatPassword: string()
  .oneOf([ref("password")], "Passwords do not match")
  .required("Repeat Password is Required"),
});
const ResetPassword = () => {
  const { toast } = useToast();
  const { token } = useParams();
  const navigate = useNavigate();
  const { mutate, isLoading } = useMutation({
    mutationKey: ["verify-forgot-token"],
    mutationFn: () => verfiyForgotToken,
    enabled: !!token,
    onError: (error) => {
      toast({
        title: "signUp Error",
        description: error.message,
        status: "error",
      });
      navigate("/signup");
    },
    onSettled: () => {
      navigate("/Reset-Success");
    },
  });

  if (isLoading)
    return (
      <Center h="100vh">
        <Spinner />
      </Center>
    );

  return (
    <Container>
      <Center minH="100vh">
        <Card>
          <Text mt="4" fontWeight="medium" textStyle="h1">
            Reset Password
          </Text>
          <Text textStyle="p2" color="black.60" mt="4">
            Enter your new password.
          </Text>
          <Formik
            initialValues={{
              password: "",
              repeatPassword: "",
            }}
            onSubmit={(values) => {
              mutate({ token, password: values.password });
            }}
            validationSchema={ResetPasswordVaildationScheme}
          >
            {() => (
              <Form>
                <Stack mt="8" spacing={6}>
                  <Field name="password">
                    {({ field, meta }) => (
                      <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <FormLabel htmlFor="password">New Password</FormLabel>
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
                          Repeat New Password
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
