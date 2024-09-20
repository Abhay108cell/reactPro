import React from "react";
import Card from "../../../components/Card";
import { Box, Button, Center, Icon, Text, VStack } from "@chakra-ui/react";
import { BsPatchCheckFill } from "react-icons/bs";

const RegisterSuccess = () => {
  return (
   <Center minH="100vh">
     <Card>
      <VStack spacing={6}>
        <Icon as={BsPatchCheckFill} boxSize="48px" color="green" />
        <Text  textStyle="h4" color="p.black" fontWeight="medium">
        Successfully Registration
        </Text>
        <Text textAlign="center" textStyle="p2" color="black.60">
        Hurray! You have successfully created your account. Enter the app to explore all it’s features.
        </Text>
        <Button w="full" >Enter the app</Button>
      </VStack>
    </Card>
   </Center>
  );
};

export default RegisterSuccess;
