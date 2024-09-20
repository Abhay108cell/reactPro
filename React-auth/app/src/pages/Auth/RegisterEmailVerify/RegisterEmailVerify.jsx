import React from "react";
import Card from "../../../components/Card";
import { Box, Button, Center, Icon, Text, VStack } from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";

const RegisterEmailVerify = () => {
  return (
   <Center minH="100vh">
     <Card>
      <VStack spacing={6}>
        <Icon as={MdEmail} boxSize="48px" color="p.purple" />
        <Text  textStyle="h4" color="p.black" fontWeight="medium">
          Email Verification
        </Text>
        <Text textAlign="center" textStyle="p2" color="black.60">
          We have sent you an email verification <Box as="b" color="p.black">abhay@gmail.com</Box> . If you didn’t receive it, click the button below.
        </Text>
        <Button w="full" variant="outline">Re-send Email</Button>
      </VStack>
    </Card>
   </Center>
  );
};

export default RegisterEmailVerify;
