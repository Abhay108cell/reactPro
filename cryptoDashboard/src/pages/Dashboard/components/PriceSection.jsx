import React from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import { Stack, HStack, Text, Tag } from "@chakra-ui/react";

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
            <Text textStyle="h2" fontWeight="medium">
              22%{" "}
            </Text>
          </HStack>
        </HStack>
      </Stack>
    </CustomCard>
  );
};

export default PriceSection;
