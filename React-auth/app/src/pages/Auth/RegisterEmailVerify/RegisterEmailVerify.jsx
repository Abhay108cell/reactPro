import React from "react";
import Card from "../../../components/Card";
import {
  Box,
  Button,
  Center,
  Container,
  Icon,
  Spinner,
  Text,
  useQuery,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";

const RegisterEmailVerify = () => {
  const toast = useToast();

  // console.log(location);
  
  const location = useLocation();
  const email = location.state?.email ?? "";
  if (email === "") {
    return <Center h="100vh">Invalid Email</Center>;
  }
 
  const { mutate, isSuccess, isLoading } = useMutation({
    mutationkey: ["sendVerificationEmail"],
    mutationFn: sendVerificationEmail,
    onSettled: (data) => {
      console.log(data);
    },
    onError: (error) => {
      toast({
        title: "signup Error",
        description: error.message,
        status: "error",
      });
    },
    enabled: !!email,
  });

  useEffect(()=>{
    mutate({email});
  },[email ])


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
              <Button w="full" variant="outline"
              onClick={()=>{
                mutate({email})
              }}
              isLoading={isLoading}
              >
                Re-send Email
              </Button>
            </VStack>
          </Card>

      </Center>
    </Container>
  );
};

export default RegisterEmailVerify;
