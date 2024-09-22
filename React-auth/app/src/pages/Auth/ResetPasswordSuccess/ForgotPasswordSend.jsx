import React from "react";
import Card from "../../../components/Card";
import {
  Box,
  Button,
  Center,
  Container,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BsPatchCheckFill } from "react-icons/bs";

const ResetPasswordSuccess = () => {
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
            <Icon as={BsPatchCheckFill} boxSize="48px" color="green" />
            <Text textStyle="h4" color="p.black" fontWeight="medium">
              Password Reset Done
            </Text>
            <Text textAlign="center" textStyle="p2" color="black.60">
              We have sent you an email verification{" "}
              <Box as="b" color="p.black">
                abhay@gmail.com
              </Box>{" "}
              Please follow the instructions from the email. We have sent you an
              email verification to{" "}
            </Text>
          </VStack>
        </Card>
      </Center>
    </Container>
  );
};

export default ResetPasswordSuccess;
