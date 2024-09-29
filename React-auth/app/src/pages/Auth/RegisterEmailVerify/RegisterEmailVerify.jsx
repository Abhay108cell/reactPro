import React, { useEffect } from "react";
import Card from "../../../components/Card";
import {
  Box,
  Button,
  Center,
  Container,
  Icon,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";
import {  useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { sendVerificationEmail } from "../../../Api/Query/userQuery";

const RegisterEmailVerify = () => {
  const toast = useToast();
  
  const  {email} = useParams()
  
  if (email === "") {
    return <Center h="100vh">Invalid Email</Center>;
  }

  const { mutate, isSuccess, isLoading } = useMutation({
    mutationKey: ["send-verification-email"],
    mutationFn: sendVerificationEmail,
    onSuccess: (data) => {
      console.log(data);
      
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        status: "error",
      });
    },
    enabled: !!email
  });

  useEffect(() => {
    mutate({ email });
  }, [email, mutate]);

  return (
    <Container>
      <Center minH="100vh">
        <Card p={{ base: "4", md: "10" }} showCard={true}>
          <VStack spacing={6}>
            <Icon as={MdEmail} boxSize="48px" color="p.purple" />
            <Text textStyle="h4" color="p.black" fontWeight="medium">
              {email}
            </Text>
            <Text textAlign="center" textStyle="p2" color="black.60">
              We have sent an email verification to{" "}
              <Box as="b" color="p.black">
                {email}
              </Box>
              . If you didn’t receive it, click the button below.
            </Text>
            <Button
              w="full"
              variant="outline"
              onClick={() => {
                mutate({ email });
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
