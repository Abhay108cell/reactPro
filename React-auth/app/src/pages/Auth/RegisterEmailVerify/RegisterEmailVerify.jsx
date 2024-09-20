import React from "react";
import Card from "../../../components/Card";
import { Icon, Text, VStack } from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";

const RegisterEmailVerify = () => {
  return (
    <Card>
      <VStack>
        <Icon as={MdEmail} boxSize="48px" color="p.purple" />
        <Text textStyle="h4" color="p.black">
          Email Verification
        </Text>
        <Text textStyle="p2" color="p.black">
          We have sent you an email verification abhay@gmail . If you didn’t
          receive it, click the button below.
        </Text>
      </VStack>
    </Card>
  );
};

export default RegisterEmailVerify;
