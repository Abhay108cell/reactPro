import { Flex, Icon, Text, Stack } from "@chakra-ui/react";
import React from "react";
import { IoMail } from "react-icons/io5";

const SupportCard = ({leftComponent, icon, title, text}) => {
  return (
    <Flex
      gap={6}
      flexDir={{
        base: "column",
        xl: "row",
      }}
    >
      <Stack maxWidth="380px">
        <Icon as={icon} boxSize={6} color="p.purple" />
        <Text fontWeight="sm" as="h1" textStyle="h2">
          {title}
        </Text>
        <Text fontSize="sm" color="black.60">
          {text}
          us.
        </Text>
      </Stack>
      {leftComponent}
    </Flex>
  );
};

export default SupportCard;
