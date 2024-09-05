import { HStack, Stack, Icon, Text, Tag, Button } from "@chakra-ui/react";
import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { PiArrowLineDownBold } from "react-icons/pi";
import { TbArrowBarToUp } from "react-icons/tb";

const PortfolioSection = () => {
  return (
    <HStack justify="space-between" bg="white" borderRadius="xl" p="6" spacing="16">
      <HStack>
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
            <Text textStyle="h2">1300.00 </Text> <Tag>INR</Tag>
          </HStack>
        </HStack>
      </Stack>

      </HStack>
      <HStack>
          <Button gap="10px">
            <PiArrowLineDownBold /> Deposite
          </Button>
        <Button gap="10px">
        <TbArrowBarToUp />
           Withdraw</Button>
      </HStack>
    </HStack>
  );
};

export default PortfolioSection;
