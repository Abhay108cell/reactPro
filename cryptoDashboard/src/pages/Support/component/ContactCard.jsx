import React from 'react'
import {
  
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


const ContactCard = () => {
  return (
    <Card p="6" borderRadius="1rem" flexGrow={1}>
        <Stack spacing={6}>

        <Text fontWeight="medium" fontSize="sm">
          You will receive response within 24 hours of time of submit.
        </Text>
        <HStack
         flexDir={{
          base: "column",
          md: "row",
        }}
        >
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
            <Textarea type="Message"  placeholder="Write your message..."/>
          </FormControl>
          <Checkbox defaultChecked>
            <Text fontSize="xs">
             I agree with
            <Box as="span" color="p.purple">Terms & Conditions</Box>
            </Text>
          </Checkbox>
          <Stack>
            <Button fontSize="sm">Send a Message</Button>
            <Button fontSize="sm" colorScheme="gray">Book a Meeting</Button>
          </Stack>
        </Stack>
      </Card>
  )
}

export default ContactCard