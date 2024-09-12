import {
  Flex,
  Icon,
  Text,
  Stack,
  Card,
  HStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Checkbox,
  Box,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { IoMail } from "react-icons/io5";

const SupportCard = () => {
  return (
    <Flex gap={6}
    flexDir={{
      base: "column",
      xl: "row",
    }}
    >
      <Stack maxWidth="380px" >
        <Icon as={IoMail} boxSize={6} color="p.purple" />
        <Text fontWeight="sm" as="h1" textStyle="h2">
          Contact Us
        </Text>
        <Text fontSize="sm" color="black.60">
          Have a question or just want to know more? Feel free to reach out to
          us.
        </Text>
      </Stack>
      
      
    </Flex>
  );
};

export default SupportCard;
