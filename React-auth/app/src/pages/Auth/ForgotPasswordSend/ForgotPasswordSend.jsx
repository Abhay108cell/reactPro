import React from "react";
import Card from "../../../components/Card";
import { Box, Button, Center, Icon, Text, VStack } from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";

const ForgotPasswordSend = () => {
  return (
   <Center minH="100vh">
     <Card>
      <VStack spacing={6}>
        <Icon as={MdEmail} boxSize="48px" color="p.purple" />
        <Text  textStyle="h4" color="p.black" fontWeight="medium">
         Successfully Sent
        </Text>
        <Text textAlign="center" textStyle="p2" color="black.60">
          We have sent you an email verification <Box as="b" color="p.black">abhay@gmail.com</Box> Please follow the instructions from the email. We have sent you an
          email verification to{" "}
        </Text>
        
      </VStack>
    </Card>
   </Center>
  );
};

export default ForgotPasswordSend;
