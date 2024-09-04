import { HStack, Stack, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";

const PortfolioSection = () => {
  return (
    <HStack bg="white" borderRadius="xl" p="6">
      <Stack>
        <HStack color="black.80">
          <Text fontSize="sm">Total Portfolio Value</Text>
          <Icon as={AiOutlineInfoCircle} />
        </HStack>
        <Text textStyle="h2">$122,23.54 </Text>
      </Stack>
      <Stack>
        <HStack color="black.80">
          <Text fontSize="sm">Wallet Balance</Text>
        </HStack>
        <HStack>
          <HStack>
            <Text textStyle="h2">22.39401000 </Text> <Tag>BTC</Tag>
          </HStack>
          <HStack>
            <Text textStyle="h2">1300.00 </Text> <Tag>Inr</Tag>
          </HStack>
        </HStack>
      </Stack>
    </HStack>
  );
};

export default PortfolioSection;
