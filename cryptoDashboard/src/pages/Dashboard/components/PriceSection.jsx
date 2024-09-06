import React from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import { Stack, HStack, Text, Button, Icon,Flex, Image } from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";

import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";

const PriceSection = () => {
  return (
    <CustomCard>
      <Flex justify="space-between" align="start">
      <Stack>
        <HStack color="black.80">
          <Text fontSize="sm">Wallet Balance</Text>
        </HStack>
        <HStack
          spacing={5}
          align={{
            base: "flex-start",
            sm: "center",
          }}
          flexDir={{
            base: "column",
            sm: "row",
          }}
        >
          <HStack>
            <Text textStyle="h2" fontWeight="medium">
              22.39401000{" "}
            </Text>
            <HStack fontWeight="medium"
            color="green.500"
            >
              <Icon
              as={BsArrowUpRight}
              />
            <Text 
            fontSize="sm" fontWeight="medium">
              22%{" "}
            </Text>
            </HStack>
          </HStack>
        </HStack>
      </Stack>
      <HStack>
        <Button leftIcon={<Icon as={FaCirclePlus} />}>Buy</Button>
        <Button leftIcon={<Icon as={FaCircleMinus} />}>Sell</Button>
      </HStack>

      </Flex>
      <Image src="/Vector1.png"/>
      <Image src="/Vector.png"/>
    </CustomCard>
  );
};

export default PriceSection;
