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
} from "@chakra-ui/react";
import React from "react";
import { IoMail } from "react-icons/io5";

const SupportCard = () => {
  return (
    <Flex>
      <Stack>
        <Icon as={IoMail} boxSize={6} color="p.purple" />
        <Text fontWeight="sm" as="h1" textStyle="h2">
          Contact Us
        </Text>
        <Text fontSize="sm" color="black.60">
          Have a question or just want to know more? Feel free to reach out to
          us.
        </Text>
      </Stack>
      <Card p="6" borderRadius="1rem">
        <Text fontWeight="medium" fontSize="sm">
          You will receive response within 24 hours of time of submit.
        </Text>
        <HStack>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input type="Name"  placeholder="Enter your name..."/>
          </FormControl>
          <FormControl>
            <FormLabel>Surname</FormLabel>
            <Input type="Surname"  placeholder="Enter your surname..."/>
          </FormControl>
        </HStack>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="Email"  placeholder="Enter your e-mail..."/>
          </FormControl>
          <FormControl>
            <FormLabel>Message</FormLabel>
            <Textarea type="Message"  placeholder="Enter your e-mail..."/>
          </FormControl>
          <Checkbox defaultChecked> I agree with
            <Box as="span" color="p.purple">Terms & Conditions</Box>
          </Checkbox>
      </Card>
    </Flex>
  );
};

export default SupportCard;
