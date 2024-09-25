import React from "react";
import Card from "../../../components/Card";
import {
  Box,
  Button,
  Center,
  Container,
  Icon,
  Text,
  useQuery,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";
import { useLocation } from "react-router-dom";
// import { useMutation } from "@tanstack/react-query";

const RegisterEmailVerify = () => {
  const toast = useToast();

  const location = useLocation(); 
  const email = location.state?.email ?? ""
  if (email === "") {
    return <Center h="100vh">Invalid Email</Center>
  }

  const {mutate, isLoading,} = useQuery({
    querykey: ["Register-Email-Verify"],
    QueryFn: signupUser,
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
    <Container>
      <Center minH="100vh">
        <Card
          p={{
            base: "4",
            md: "10",
          }}
          showCard={true}
        >
          <VStack spacing={6}>
            <Icon as={MdEmail} boxSize="48px" color="p.purple" />
            <Text textStyle="h4" color="p.black" fontWeight="medium">
             {email}
            </Text>
            <Text textAlign="center" textStyle="p2" color="black.60">
              We have sent you an email verification{" "}
              <Box as="b" color="p.black">
                abhay@gmail.com
              </Box>{" "}
              . If you didn’t receive it, click the button below.
            </Text>
            <Button w="full" variant="outline">
              Re-send Email
            </Button>
          </VStack>
        </Card>
      </Center>
    </Container>
  );
};

export default RegisterEmailVerify;
