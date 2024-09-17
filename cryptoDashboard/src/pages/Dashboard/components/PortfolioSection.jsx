import { HStack, Stack, Icon, Text, Tag, Button } from "@chakra-ui/react";
import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { PiArrowLineDownBold } from "react-icons/pi";
import { TbArrowBarToUp } from "react-icons/tb";

const PortfolioSection = () => {
  return (
    <HStack justify="space-between" bg="white" borderRadius="xl" p="6"
    align={{
      base: 'flex-start',
      xl: 'center',
    }}
    flexDir={{
      base: 'column',
      xl: "row"
    }}
    spacing={{
      base: 4,
      xl:0
    }}
    >
      <HStack 
       align={{
        base: 'flex-start',
        xl: 'center',
      }}
      flexDir={{
        base: 'column',
        xl: "row"
      }}
      spacing={{
        base: 0,
        xl:16
      }}>
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Total Portfolio Value</Text>
            <Icon as={AiOutlineInfoCircle} />
          </HStack>
          <Text textStyle="h2" fontWeight="medium">$122,23.54 </Text>
        </Stack>
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Wallet Balance</Text>
          </HStack >
          <HStack spacing={5}
           align={{
            base: 'flex-start',
            sm: 'center',
          }}
          flexDir={{
            base: 'column',
            sm: "row"
          }}
          >
            <HStack>
              <Text textStyle="h2" fontWeight="medium">22.39401000 </Text>
              <Tag colorScheme="gray">BTC</Tag>
            </HStack>
            <HStack>
              <Text textStyle="h2" fontWeight="medium">1300.00 </Text>
              <Tag colorScheme="gray">INR</Tag>
            </HStack>
          </HStack>
        </Stack>
      </HStack>
      <HStack>
        <Button leftIcon={<Icon as={PiArrowLineDownBold} />}>Deposite</Button>
        <Button leftIcon={<Icon as={TbArrowBarToUp} />}>Withdraw</Button>
      </HStack>
    </HStack>
  );
};

export default PortfolioSection;
