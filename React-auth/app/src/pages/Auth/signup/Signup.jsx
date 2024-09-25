import {
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
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { object, string, ref } from "yup";
import { Formik, Form, Field } from "formik";
import Card from "../../../components/Card";
import { useMutation } from "@tanstack/react-query";
import { signupUser } from "../../../Api/Query/userQuery";

const signUpVaildationScheme = object({
  name: string().required("Name is Required"),
  surname: string().required("Surname is Required"),
  email: string().email("Invalid Email").required("Email is Required"),
  password: string().min(6, "password must be at least 6 charcters").required("Password is Required"),
  repeatPassword: string().oneOf([ref("password")], "Passwords do not match"),
})

const Signup = () => {

  const [email, setEmail] = useState("")
 
const navigate = useNavigate();

  const toast = useToast();
  const {mutate, isLoading,} = useMutation({
    mutationKey: ["signup"],
    mutationFn: signupUser,
    onSuccess: (data) => {
      navigate("/Register-Email-Verify",{
        state:  {email}
      })
    },
    onError: (error) =>{
      toast({
        title: "signup Error",
        description: error.message,
        status: "error",
        });
    }
  })

  return (
    <Container bg="white">
      <Center minHeight="100vh">
        <Card>
          <Text fontWeight="medium" textStyle="h1">Welcome to Crypto App</Text>
          <Text textStyle="p2" color="black.60" mt="4">
            Create a free account by filling data below.
          </Text>
          <Formik
          initialValues={{
            name:"",
            surname:"",
            email:"",
            password:"",
            repeatPassword:"",
            }}
            onSubmit={(values)=>{
              mutate({
                firstName: values.name,
                lastName: values.surname,
                email: values.email,
                password: values.password,
              });
              setEmail(values.email)
            }}
      validationSchema={signUpVaildationScheme}
          >
            {() => (
              <Form>
                <Stack mt="10" spacing={6}>
                  <Flex gap="4">
                    <Field name="name">
                      {({ field, meta }) => (
                        <FormControl isInvalid={!!(meta.error && meta.touched)}>
                          <FormLabel htmlFor="name">Name</FormLabel>
                          <Input
                            {...field}
                            name="name"
                            placeholder="Enter your name...."
                          />
                          <FormErrorMessage>{meta.error}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                     <Field name="surname">
                      {({ field, meta }) => (
                        <FormControl isInvalid={!!(meta.error && meta.touched)}>
                          <FormLabel htmlFor="surname">Surname</FormLabel>
                          <Input
                            {...field}
                            name="surname"
                            placeholder="Enter your surname...."
                          />{" "}
                          <FormErrorMessage>{meta.error}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </Flex>
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
                  <Checkbox>
                    <Text textStyle="p3">
                      I agree with{" "}
                      <Text as="span" color="p.purple">
                        Terms and Conditions
                      </Text>
                    </Text>
                  </Checkbox>
                  <Button
                  isLoading= {isLoading}
                   type="submit">Create Account</Button>
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

export default Signup;
