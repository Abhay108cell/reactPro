import React from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import { Stack, HStack, Text, Button, Icon } from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";
import { PiArrowLineDownBold } from "react-icons/pi";
import { TbArrowBarToUp } from "react-icons/tb";

const PriceSection = () => {
  return (
    <CustomCard>
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
        <Button leftIcon={<Icon as={PiArrowLineDownBold} />}>Deposite</Button>
        <Button leftIcon={<Icon as={TbArrowBarToUp} />}>Withdraw</Button>
      </HStack>
    </CustomCard>
  );
};

export default PriceSection;
